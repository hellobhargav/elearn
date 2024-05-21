let express = require("express");
let app = express()
const batches = [
    {
        "id": "89d8",
        "course": "UI Development",
        "startDate": "2024-04-30",
        "timings": "09:00 AM - 10:00 AM",
        "duration": "60",
        "trainer": "Bhargav"
    },
    {
        "id": "5dc3",
        "course": "UI UX Designing",
        "startDate": "2024-04-25",
        "timings": "11:00 AM - 12:00 PM",
        "duration": "75",
        "trainer": "Sakthivel"
    },
    {
        "id": "97c0",
        "course": "React JS",
        "startDate": "2024-04-29",
        "timings": "10:00 AM - 11:00 AM",
        "duration": "30",
        "trainer": "Bhargav"
    }
]

app.get("/", (req, res) => {
    res.send(batches)
})
app.get("*", (req, res) => {
    res.send("URL Not Found")
})


app.listen(4000, () => console.log("Server Started"))