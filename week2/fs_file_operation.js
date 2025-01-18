const fs = require('fs')

fs.stat('input.txt', (err, stat) =>{
    console.log(stat.isDirectory())
    console.log(stat.isFile())
})

fs.existsSync("output.txt", (flag) =>{
    if (flag){
        fs.unlinkSync('output.txt')
        console.log("file delete success")
    }
    else{
        console.log("File doesnt exist")
    }
})