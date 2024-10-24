const input = require("input");

class Game {
    gameName = "Example";
    version = "0.0.0";
    author = "Neon68";

    //functions
    #onStartFunc;
    #loopFunc;
    #yFunc;
    #nFunc;

    constructor(gameName, version, author) {
        this.gameName = gameName;
        this.version = version;
        this.author = author;
    }
    getGameInfo() {
        console.log(`${this.gameName} ${this.version} by ${this.author}`)
    }
    onStart(func) {
        this.#onStartFunc = func;
        this.#onStartFunc();
    }
    loop(func) {
        this.#loopFunc = func;
        setInterval(() => {this.#loopFunc();}, 500);
    }
}
module.exports = {Game};