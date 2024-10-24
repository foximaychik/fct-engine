class Inventory {
    item = new Array();
    constructor(item) {
        this.item = item
    }
    showInventory() {
        for (let i = 0; i < this.item.length; i++) {
            console.log(this.item[i] + " ");
        }
    }
    addItem(data, position) {
        this.item.push(data);
    }
    removeElement(position) {
        this.item.forEach((i, index) => {
            if (i === position) {
                this.item.splice(index, 1);
            }
        });
    }
}
module.exports = {Inventory}