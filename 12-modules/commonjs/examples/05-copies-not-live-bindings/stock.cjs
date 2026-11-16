let itemsInStock = 3;

function sellOne() {
    itemsInStock -= 1;
}

function getStock() {
    return itemsInStock;
}

// The object gets a copy of the value 3, not a link to the variable.
module.exports = { itemsInStock, sellOne, getStock };
