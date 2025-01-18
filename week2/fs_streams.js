const fs = require('fs')

const readStream = fs.createReadStream('input_stream.txt')
const writeStream = fs.createWriteStream('output_stream.txt')

readStream.on('data', (chunk) => {
    console.log(chunk)
})

readStream.on('end', () => {
    console.log('Data read stream end')
})

readStream.on('error', (err) =>{
    console.log(`error read stream ${err}`)
})

readStream.on('close', ()=> {
    console.log('read stream close')
})