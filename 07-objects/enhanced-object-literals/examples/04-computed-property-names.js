// Computed property names: the expression in square brackets is the key.
const propName = 'score';

const player = {
    name: 'Jane',
    [propName]: 100
};

console.log(player.score); // 100
