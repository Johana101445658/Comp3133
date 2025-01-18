const fs = require('fs')
console.log("--- START ---")
//Read File Async
// fs.readFile("input.txt", "utf-8", (err, data) => {
fs.readFile("input.txt", (err, data) => {
    if(err){
        console.log(err)
        return
    }

   console.log(`Async : ${data.toString()}`)
})

//sync
const dataSync = fs.readFileSync("input.txt")
console.log(`Sync : ${dataSync.toString()}`)

//async with promise
fs.promises.readFile("input.txt")
    .then((data => {
        console.log(`Async : ${data.toString()}`)
    }))
    .catch((err) => {
        console.log(err)
    })


console.log("--- END ---")