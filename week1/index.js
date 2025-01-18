console.log("Buffer Examples Week 01")

// DEPRECATED let b1 = new Buffer('hello')
// all the values from A Hello is translated to HEXCODE 
let b1 = Buffer.from('A Hello')


//buffer is like temporary storage 
// keep data in binary (machine understandable form)
//data is stored as byte (or encoding you told it to)

console.log(b1)

console.log(b1.toString())
console.log(b1[0])

console.log(b1.toString('ascii'))
console.log(b1.toString('utf8'))
console.log(b1.toString('hex'))
console.log(b1.toString('base64'))
// returns true because Hello has He
console.log(b1.includes("He"))
// 7 spaces for length because the space is counted
console.log(b1.length)
// Alloc 
// alloc defines the buffer size not intializing anything 
let b2 = Buffer.alloc(10, 'A') 
console.log(b2)

// undefined cant assign a value, buffer has strict rules 
// cant add or remove values
console.log(b2[10])

b2[0] = 65
console.log(b2[0])
console.log(b2.toString())
console.log(b2)

let b3 = Buffer.allocUnsafe(20)
console.log(b3)
b3.fill('B')
console.log(b3)
console.log(b3.toString())

let b4 = Buffer.from('Hello🎁world')
console.log(b4)
console.log(b4.toString())
// how can i only get the 🎁 from that Hello world

console.log(b4.toString('utf8',5,))
//how to concatenate
let b6 = Buffer.concat([b3,b4])
console.log(b6.toString())

//slice
let b7 = b6.slice(20, 34)
console.log(b7.toString())

let b8 = Buffer.alloc(10)
b8.write('Buffer', 2)
console.log(b8)
console.log(b8.toString())
// read is not a function 
// this returns true because this is a buffer 
console.log(Buffer.isBuffer(b8))
// print the index and values key value pair 
for ( c of b8.entries()){
    console.log(c)
}

let b9 = Buffer.alloc(10)
// from where to write, what to write, where to end 
b8.copy(b9, 0, 2, 8)
console.log(b9.toString())

console.log(b9.toString())
let bufferJson = b9.toJSON()
console.log(bufferJson.data)
let b10 = Buffer.from(bufferJson.data)
console.log(b10.toString())


const arrayBytes = [0x41, 0x20, 0x48, 0x65, 0x6c, 0x6c ,0x6f,]
let b11 = Buffer.from(arrayBytes)
console.log(b11.toString())

let arrayBuffer = new ArrayBuffer(10)
arrayBuffer[0] = 65
let b12 = Buffer.from(arrayBuffer, 0, 2)
console.log(b12)