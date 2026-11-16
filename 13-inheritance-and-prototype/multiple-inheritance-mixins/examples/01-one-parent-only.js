// extends takes one parent. Two parents are a syntax error, so a file with that line
// does not run at all. Remove the // in front of it to see the SyntaxError.
class Serializable {}
class Emitter {}

// class Note extends Serializable, Emitter {} // SyntaxError: Unexpected token ','

class Note extends Serializable {}

console.log(new Note() instanceof Serializable); // true
