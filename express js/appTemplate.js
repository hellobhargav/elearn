let express = require("express");
let app = express()

app.set("view engine", "ejs")

app.get("/profile", (req, res) => {
    res.render("profile")
})

app.get("/details", (req, res) => {
    const user = {
        name: "Bhargav",
        email: "elearninfotechweb@gmail.com"
    }
    res.render("details", { user })
})


app.listen(4000, () => console.log("Rendered Template Engine"))