const fs = require('fs')
const csv = require('csv-parser');

if (fs.existsSync("canada.txt")){
    fs.unlinkSync('canada.txt')
    console.log("file delete success")
}
else{
    console.log("file doesnt exist")
}

if (fs.existsSync("usa.txt")){
    fs.unlinkSync('usa.txt')
    console.log("file delete success")
}
else{
    console.log("file doesnt exist")
}
