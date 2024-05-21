let express = require("express");
let app = express();
let student = require("./routers/studentRouter")
let employee = require("./routers/EmployeeRouter")

app.use("/student", student);

app.use("/employee", employee);

app.listen(4000, () => console.log("API Started using Routers"))    