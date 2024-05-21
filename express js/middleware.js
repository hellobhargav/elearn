//middleware
let ageFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide your age")
    }
    else if (req.query.age < 18) {
        res.send("You are underage to access the page")
    }
    else {
        next()
    }
}
module.exports = ageFilter