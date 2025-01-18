const fs = require('fs')

//write Async callback
let dataToWrite = Buffer.from("Welcome hello there") 
fs.writeFile("output.txt", dataToWrite, (err) => {
    if(err){
        console.log(err)
        return
    }

    console.log("Async callback success")
})

fs.writeFileSync("output.txt", dataToWrite)
fs.promises.writeFile("output.txt", dataToWrite)
    .then(() =>{
        console.log("Async promise write success")
    })
    .catch((err) => {
        console.log(err)
    })