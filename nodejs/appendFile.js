const fs = require("fs")
fs.appendFile("myNewFile.txt", "Welcome to File System in Node", (err, info) => {
    if (err) throw err
    console.log("File Appended");

})