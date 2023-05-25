const path = require("path");
const fs = require("fs");
const csv = require("csv-parser");
const bcrypt = require("bcrypt");


const fileUtils = {
    read : (filePath) => {
        
        fs.readFileSync(filePath, 'utf8', (err, data)=> {
            if(err) {
                console.log(`err = ${err}`)
                return null
            }
            else {
                console.log(`data = ${data}`)
                return data
            }
        })

        
      
    },

    write : (filePath, data) => {

    },

    generateHashedPassword : () => {

    }

}

module.exports = fileUtils