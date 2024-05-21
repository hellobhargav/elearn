var http = require("http");
http.createServer((req, res) => {
    const data = [
        {
            "name": "Pradeep",
            "salary": "98589",
            "role": "React Developer",
            "onsite": true
        },
        {
            "name": "Sudheer",
            "salary": "98589",
            "role": "Node Developer",
            "onsite": true
        },
        {
            "name": "Arun",
            "salary": "98589",
            "role": "Node Developer",
            "onsite": true
        },
        {
            "name": "Rama Krishna",
            "salary": "98589",
            "role": "UI Developer",
            "onsite": true
        }, {
            "name": "Sandhya",
            "salary": "98589",
            "role": "Database Developer",
            "onsite": true
        },
        {
            "name": "Sujith",
            "salary": "98589",
            "role": "Fullstack Developer",
            "onsite": true
        }
    ]
    res.writeHead(200, { 'Content-Type': 'text/json' })
    //  res.write("<h1>Welcome to Node Js Server </h1>");
    res.write(JSON.stringify(data));
    res.end()
}).listen(4000, () => console.log("Server Started"));
