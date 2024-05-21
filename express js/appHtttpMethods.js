let express = require("express");
let app = express()

app.get("/student", (req, res) => {
    res.send("<h1>Welcome to Student Data</h1>")
})

app.post("/student", (req, res) => {
    res.send("<h1>Add Student Data</h1>")
})
app.delete("/student", (req, res) => {
    res.send("<h1>Delete Student Data</h1>")
})

app.put("/student", (req, res) => {
    res.send("<h1>Update Student Data</h1>")
})
app.patch("/student", (req, res) => {
    res.send("<h1>Patched Student Data</h1>")
})

app.get("/employee",(req,res)=>{
    res.send("<h1>Welcome to Employee Data</h1>")
})
app.post("/employee",(req,res)=>{
    res.send("<h1>Add Employee Data</h1>")
})

app.put("/employee",(req,res)=>{
    res.send("<h1>Update Employee Data</h1>")
})
app.patch("/employee",(req,res)=>{
    res.send("<h1>Pacthed Employee Data</h1>")
})

app.delete("/employee",(req,res)=>{
    res.send("<h1>Delete Employee Data</h1>")
})
app.listen(4000, () => console.log("Simple API is Started"))