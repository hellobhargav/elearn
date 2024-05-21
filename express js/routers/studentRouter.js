let express = require("express")
let router = express.Router()


router.get("/", (req, res) => {
    res.send("<h1>Welcome to Student Data</h1>")
})

router.post("/", (req, res) => {
    res.send("<h1>Add Student Data</h1>")
})
router.delete("/", (req, res) => {
    res.send("<h1>Delete Student Data</h1>")
})

router.put("/", (req, res) => {
    res.send("<h1>Update Student Data</h1>")
})
router.patch("/", (req, res) => {
    res.send("<h1>Patched Student Data</h1>")
})


module.exports = router