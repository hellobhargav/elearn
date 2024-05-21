//let buff = Buffer.from("hellobhargav")

let buff = Buffer.alloc(1);
buff.write("hellobhargav")

buff[0] = 98;
console.log(buff);
console.log(buff.toString());
console.log(buff[0]);;
