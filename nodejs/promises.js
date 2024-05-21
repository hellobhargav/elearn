var a = 10;
var b = 40;
let cond = true

let prom = new Promise((resolve, reject) => {
    if (cond) {
        setTimeout(() => {
            b = 90;
            resolve(b)
        }, 5000)
    }
    else {
        reject("Error")
    }
})
prom.then((b) => console(a + b)).catch((err) => console.log(a + b))