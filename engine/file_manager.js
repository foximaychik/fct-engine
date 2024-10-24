const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");
const logger = require("./logger.js");

let lg = new logger.Logger();

class FileManager {
    constructor(){};
    load(fileName){
        let p = path.join(__dirname, fileName);
        try {
            return fs.readFileSync(p, 'utf8');
        } catch (error) {
            lg.log(`An error ocurred! ${error.message}`);
            return error;
        }
    }
    save(data, fileName) {
        let p = path.join(__dirname, fileName);
        try {
            fs.appendFileSync(p, data);
        } catch (error) {
            lg.log(`An error ocurred! ${error.message}`);
        }
    }
}
module.exports = { FileManager };