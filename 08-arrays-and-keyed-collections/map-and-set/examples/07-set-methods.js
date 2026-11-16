// The Set methods of ES2025 (Node 22 and later, all current browsers).
const jobSkills = new Set(['js', 'css', 'git', 'sql']);
const mySkills = new Set(['html', 'css', 'js']);

console.log(mySkills.union(jobSkills));
// Set(5) { 'html', 'css', 'js', 'git', 'sql' }
console.log(jobSkills.intersection(mySkills));
// Set(2) { 'css', 'js' }
console.log(jobSkills.difference(mySkills));
// Set(2) { 'git', 'sql' }
console.log(mySkills.symmetricDifference(jobSkills));
// Set(3) { 'html', 'git', 'sql' }

const basics = new Set(['css', 'js']);
console.log(basics.isSubsetOf(mySkills)); // true
console.log(mySkills.isSupersetOf(basics)); // true
console.log(mySkills.isDisjointFrom(new Set(['php']))); // true
