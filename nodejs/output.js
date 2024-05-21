var http = require("http");

http.createServer((req, res) => {
    const data = "Welcome to Node Js by hellobhargav";
    res.write(data)
    res.end();
}).listen(4000, () => console.log("Server Started"))