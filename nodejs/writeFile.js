const fs = require("fs")
fs.writeFile("emptyFile.txt", "Welcome to File System in Node using WriteFile", (err, info) => {
    if (err) throw err
    console.log("File Data Added");

})