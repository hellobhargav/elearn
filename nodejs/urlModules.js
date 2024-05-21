let url = require("url")
let weburl = "https://biet.ac.in/subevents-fest.php?val=Fest";
let q = url.parse(weburl,true);

console.log(q.protocol);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.search);
console.log(q.href);
