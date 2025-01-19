const fs = require('fs')
const csv = require('csv-parser');

const canadaStream = fs.createWriteStream("canada.txt")
const usaStream = fs.createWriteStream("usa.txt");

fs.createReadStream("input_countries.csv")
    .pipe(csv())
    .on('data', (row) => {
        const fileStuff = `${row.country},${row.year},${row.population}\n`; 
        if(row.country === "Canada"){
            canadaStream.write(fileStuff);
        }
        else if (row.country === "United States"){
            usaStream.write(fileStuff);
        }
        //else{
          //  console.log("no data in csv")
        //}
    })
    .on('end', () => {
        console.log("csv filtered into other files")
        canadaStream.end()
        usaStream.end()
    })