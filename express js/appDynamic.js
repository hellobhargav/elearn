let express = require("express");

let app = express();

//Patameters
// app.get("/:id", (req, res) => {
//     res.send(`<h1>Welcome ${req.params.id} </h1>`)
// });

//Patterns
app.get(`/:id([0-9]{3})`, (req, res) => {
    res.send(`<h1>Welcome ${req.params.id} </h1>`)
});

//Multiple Parameters
app.get("/:id/:name", (req, res) => {
    res.send(`<h1>Emp Code : ${req.params.id} and Emp Name :  ${req.params.name} </h1>`)
});


//Query 
app.get("/query", (req, res) => {
    res.send(`<h1>Welcome ${req.query.name} </h1>`)
})

app.listen(4000, () => console.log("Server Started"))