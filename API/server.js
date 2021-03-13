var http = require('http');
var fs = require('fs');

const isDev = true
const filePath = isDev ? '../public/template/template.json' : '../build/template/template.json'  

http.createServer(function (req, res) {
    console.log(req.url);

    if (req.url == '/upload') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({"status":"OK"}));
        res.end();
        return false;
    }

    if (req.url != '/') {
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
    
    return obj
}