let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Welcome to Employee Data</h1>")
})

router.post("/", (req, res) => {
    res.send("<h1>Add Employee Data</h1>")
})

router.put("/", (req, res) => {
    res.send("<h1>Update Employee Data</h1>")
})
router.patch("/", (req, res) => {
    res.send("<h1>Pacthed Employee Data</h1>")
})

router.delete("/", (req, res) => {
    res.send("<h1>Delete Employee Data</h1>")
})
module.exports = router