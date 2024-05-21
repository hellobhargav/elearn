
let express = require("express");
let ageFilter = require("./middleware")
let app = express()

//app.use(ageFilter)

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>")
})

app.get("/about", ageFilter, (req, res) => {
    res.send("<h1>Welcome to About Page</h1>")
})

app.listen(4000, () => console.log("Server Started"))