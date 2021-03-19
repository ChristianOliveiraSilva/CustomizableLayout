const http = require('http');
const fs = require('fs');
const url = require('url');

const isDev = true
const filePath = isDev ? '../public/template/template.json' : '../build/template/template.json'  

http.createServer(function (req, res) {
    const urlParsed = url.parse(req.url, true)

    if (urlParsed.pathname == '/upload') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({"status":"OK"}));
        res.end();
        return false;
    }


    if (urlParsed.pathname != '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({"error":"404"}));
        res.end();
        return false;
    }
    
    try {
        fs.readFile(filePath, 'utf8', function(err, data) {
            if (err) throw err;
            let obj = JSON.parse(data);
            
            // fazer as mudanças
            obj = changeJSON(obj)

            // salvar
            fs.writeFile(filePath, JSON.stringify(obj, null, 4), function (err) {
                if (err) throw err;

                res.writeHead(200, {'Content-Type': 'application/json'});
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


function changeJSON(obj) {
    const path = 'config/title'
    const struct = path.split('/')
    const value = 'banana'
    
    obj2 = buildRecursiveObject(struct, value)
    // let merged = mergeRecursive(obj, obj2)
    
    return obj
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

function buildRecursiveObject(struct, value) {
    let obj = {}, obj1 = {}

    console.log(struct);

    for (let index = 0; index < struct.length; index++) {
        const element = struct[index];
        obj[element] = value
    }

    console.log(obj);
    return obj;
}