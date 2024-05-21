var http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Server Working</h1>");
    res.end()
}).listen(4000, () => console.log("Creating Server Using HTTP Global Core Module"))