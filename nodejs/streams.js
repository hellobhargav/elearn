// let http = require("http");
// let fs = require("fs");
// http.createServer((req, res) => {
//     // fs.readFile("myNewFile.txt", (err, data) => {
//     //     res.write(data)
//     //     res.end()
//     // })
//     let stream = fs.createReadStream("myNewFile.txt");
//     stream.pipe(res)
// }).listen(4000, () => console.log("Server Started"))

let http = require("http");
let fs = require("fs");
let data = "Hyderabad IT Trainings is a Hyderabad based Training Institute delivering classroom and online trainings in India, USA and UK, Australia. We are Providing high quality training is our core value. We offer both classroom and online training on niche technologies which are in high demand. All our trainers are IT professionals with rich experience.Hyderabad IT Trainings is a leading training and placement company in hyderabad managed by industry experts with more than 9+ years of experience in leading MNC Companies. We are wellknown for our practical approach towards training that enables students to gain realtime exposure.Hyderabad IT Trainings is a one-stop shop for IT courses, Web Development services & Recruitment services. Hyderabad IT Trainings concentrates on its vision of building up strong client and business partnerships. To this end, Hyderabad IT Trainings offers Real-time and placement focuses training services."

http.createServer((req, res) => {
    let stream = fs.createWriteStream('stream.txt');
    stream.write(data)
    stream.end()
}).listen(4000, () => console.log("Server Started"))