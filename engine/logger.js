const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");
let date = new Date();

class Logger {
    constructor(){};
    //dateData = null;
    log(data) {
        let p = path.join(__dirname, "../logs.txt");
        try {
            let dateData = `${date.toLocaleString()}:\n\t${data}\n`; 
            fs.appendFileSync(p, dateData);
        } catch (error) {
            console.error(`An error occurred! ${error.message}!`);
        }
    }
}
module.exports = { Logger };