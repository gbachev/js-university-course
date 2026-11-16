// Adding properties to exports works: it is the same object as module.exports.
exports.studentDiscount = 0.1;
exports.applyDiscount = (price, rate) => price * (1 - rate);
