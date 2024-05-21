const fs = require("fs")
fs.rename("emptyFile.txt", 'NoMoreEmpty.txt', (err, info) => {
    if (err) throw err
    console.log("File Renamed");

})