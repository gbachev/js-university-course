const passScore = 100;
const user1Score = 100;
const user2Score = 90;

const u1status = user1Score >= passScore ? 'pass' : 'try again';
const u2status = user2Score >= passScore ? 'pass' : 'try again';

console.log(u1status); // pass
console.log(u2status); // try again
