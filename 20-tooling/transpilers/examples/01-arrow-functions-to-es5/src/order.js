const order = {
    id: 42,
    ship() {
        setTimeout(() => {
            console.log(`Order ${this.id} shipped`);
        }, 100);
    }
};

order.ship(); // Order 42 shipped
