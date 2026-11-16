// A long loop split into chunks, with a real task in between for clicks and paints.
function nextTask() {
    return new Promise((resolve) => setTimeout(resolve, 0));
}

const orders = Array.from({ length: 300000 }, (_, i) => ({
    id: i,
    total: 10,
}));

async function totalRevenue(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        total += orders[i].total;
        if (i % 50000 === 0) {
            await nextTask(); // let clicks and paints in
        }
    }
    return total;
}

setTimeout(() => console.log('Click handled'), 0);

totalRevenue(orders).then((total) => console.log(total));
// Click handled
// 3000000
