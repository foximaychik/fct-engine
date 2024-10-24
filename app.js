//!Engine Imports
const { encodingExists } = require("iconv-lite");
const engine = require("./engine/engine.js");
const fileManager = require("./engine/file_manager.js");
const inventory = require("./engine/inventory.js");
const items = require("./items.json");

//Variables
let minCost = 0;
let g = ["Cobblestone", "Dirt"];

//!Game Classes
let game = new engine.Game("Tutor", "1", "YA");
let inv = new inventory.Inventory(g);
let fm = new fileManager.FileManager();

function onGameStart() {
    inv.showInventory();
    inv.addItem("Sword");
    console.log("");
    inv.showInventory();
    console.log("");
    inv.removeElement("Sword");
    inv.showInventory();
}

game.onStart(() => {
    onGameStart();
});

/*
game.loop(() => {
    console.log(items.CoreTestItem);
    process.exit();
});
*/

//TODO: console.log(Math.round(Math.random() * (items.cobblestone.cost - minCost) + minCost));