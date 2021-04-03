const http = require('http');
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');

const isDev = true
const filePath = isDev ? '../public/template/template.json' : '../build/template/template.json'  

http.createServer(function (req, res) {
    const urlParsed = url.parse(req.url, true)

    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Content-Type', 'application/json');

    if (urlParsed.pathname == '/upload') {
        res.write(JSON.stringify({"status":"is not working yet"}));
        res.end();
        return false;
    }

    if (urlParsed.pathname != '/exporter') {
        res.write(JSON.stringify({"error":"404"}));
        res.end();
        return false;
    }
    
    try {
        fs.readFile(filePath, 'utf8', function(err, data) {
            if (err) throw err;
            let obj = JSON.parse(data);
            const newObj = JSON.parse(urlParsed.query.obj)

            obj = changeJSON(obj, newObj)

            // salvar
            fs.writeFile(filePath, JSON.stringify(obj, null, 4), function (err) {
                if (err) throw err;

                res.write(JSON.stringify({"status":"OK"}));
                res.end();
            });
        });    
    } catch (error) {
        console.log('ERROR', error);

        res.writeHead(500, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({"status":"ERROR"}));
        res.end();
    }
}).listen(3001);


function changeJSON(obj, newObj) {
    let merged = mergeRecursive(obj, newObj)
     
    return merged
}

function mergeRecursive(obj1, obj2) {
    for (var p in obj2) {
        try {
            if ( obj2[p].constructor == Object ) {
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