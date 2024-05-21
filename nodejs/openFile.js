const fs = require("fs")
fs.open("emptyFile.txt", "w", (err, info) => {
    if (err) throw err
    console.log("File Saved");

})