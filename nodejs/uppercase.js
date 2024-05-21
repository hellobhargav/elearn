var http = require("http");
var uc = require("uppercase");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write(uc("<h1>Welcome to Uppercase Module</h1>"));
    res.end()
}).listen(4000, () => console.log("Server Started"))