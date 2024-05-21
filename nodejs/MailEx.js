let nodemailer = require("nodemailer");
let transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "elearninfotech1@gmail.com",
        pass: "bazj kkzv colo tdyj"
    }
})
let mailOptions = {
    to: "ch.pradeep49@gmail.com, ayazgori02@gmail.com , rachanaakula29@gmail.com ,aaressinfomedia@gmail.com , bhargavwd@gmail.com",
    from: "elearninfotech1@gmail.com",
    subject: "Final Testing Mail From NodeJs ",
    text: "this mail sent for testing purpose in node from hellobhargav"
}

transport.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log("Unable to send a mail");
        console.log(err);
    }
    else {
        console.log("Mail Sent Successfully");
    }
})