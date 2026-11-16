// Good: a deep structure destructured in two steps instead of one long pattern.
const user = {
    name: 'John',
    stats: { followers: 120, following: 75 }
};

const { stats } = user;
const { followers, following } = stats;

console.log(followers, following); // 120 75
