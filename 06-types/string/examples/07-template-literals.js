let a = 1;
let b = 2;
let tls = `This is string defined by a template
literal on ${a + b} lines and allows
expressions embedded into it.`;

console.log(tls);
/* prints
This is string defined by a template
literal on 3 lines and allows
expressions embedded into it.
*/
