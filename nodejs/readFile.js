var http = require("http");
var fs = require("fs")
http.createServer((req, res) => {
    fs.readFile('index.html', (err, info) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(info);
        res.end()
    })
}).listen(4000, () => console.log("Reading File using FS Global Core Module"))