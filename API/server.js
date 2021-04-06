const http = require('http');
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');
const { parse } = require('querystring');
const buildObjFromUpload = require('./fixedValues');

const isDev = true
const filePath = isDev ? '../public/template/template.json' : '../build/template/template.json'  
const uploadDir = isDev ? '../public/media/content' : '../build/media/content'

http.createServer(function (req, res) {
    const urlParsed = url.parse(req.url, true)

    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Content-Type', 'application/json');
    
    if (req.method !== 'POST') {
        res.end(JSON.stringify({"error":"405"}));
    }
    
    try {
        let body = '';
        if (urlParsed.pathname == '/upload') {
            const form = formidable({ uploadDir: uploadDir});
        
            form.parse(req, (err, fields, files) => {
                if (err) throw err;
                const type = files.img.type == 'image/png' ? '.png' : '.jpg'
                let path = files.img.path + type

                fs.rename(files.img.path, path, () => {
                    const img = '/media' + path.split("media")[1].replace(/\\/g, "/")
                    const newObj = buildObjFromUpload(img, fields)
                    console.log(newObj);
                    changeJSON(res, newObj)
                    // res.write(JSON.stringify({"status":"OK"}));
                    // res.end();
                });
            });
            return true;
        }

        if (urlParsed.pathname == '/exporter') {
            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', () => {
                const newObj = JSON.parse(parse(body).obj)
                changeJSON(res, newObj)
            });
            return true;
        }

    } catch (error) {
        console.log('ERROR', error);

        res.writeHead(500, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({"status":"ERROR"}));
        res.end();
    }
    
    res.write(JSON.stringify({"error":"404"}));
    res.end();
    return false;
}).listen(3001);


function changeJSON(res, newObj) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) throw err;
        let obj = JSON.parse(data);
        let merged = mergeRecursive(obj, newObj)

        fs.writeFile(filePath, JSON.stringify(merged, null, 4), function (err) {
            if (err) throw err;

            res.write(JSON.stringify({"status":"OK"}));
            res.end();
        });
    });
}

function mergeRecursive(obj1, obj2) {
    for (var p in obj2) {
        if (obj2[p] == null) {
            continue;
        }

        try {
            if ( obj2[p].constructor == Object || Array.isArray(obj2[p]) ) {
                obj1[p] = mergeRecursive(obj1[p], obj2[p]);
            } else {
                obj1[p] = obj2[p];
            }
        } catch(e) {
            obj1[p] = obj2[p];
        }
    }
    return obj1;
}