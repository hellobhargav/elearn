let express = require("express");

let app = express();

let students = require("./routers/studentRouter")
app.use("/student", students)

app.get("/data", (req, res) => {
    var data = {
        id: 102,
        name: "John Doe",
        email: "john@doe.com",
        gender: "Male",
        age: 35,
        city: "New York"
    }
    res.send(data)
});


app.listen(4000, () => console.log("Server Started"))