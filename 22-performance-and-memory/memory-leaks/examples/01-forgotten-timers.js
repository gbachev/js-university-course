// An interval runs until we clear it, and keeps alive everything its callback uses.

// considered bad practice: nothing can ever stop this interval
function watchPriceForever(product) {
    const history = [];
    setInterval(() => history.push(product.price), 100);
}

// fixed: we keep the id and hand back a way to stop
function watchPrice(product) {
    const history = [];
    const id = setInterval(() => history.push(product.price), 100);
    return { history, stop: () => clearInterval(id) };
}

const lamp = watchPrice({ title: 'Desk lamp', price: 25 });

setTimeout(() => {
    lamp.stop(); // the product page closed
    console.log(lamp.history.length); // 5
}, 550);
