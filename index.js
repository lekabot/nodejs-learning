const fs = require('fs')

let res1 = fs.readFileSync('hello.txt', 'utf-8')
console.log(res1)
// fs.writeFileSync('hello.txt', 'Hello world!')