const fs = require("fs")
fs.unlink("emptyFile.txt", (err, info) => {
    if (err) throw err
    console.log("File Deleted");

})