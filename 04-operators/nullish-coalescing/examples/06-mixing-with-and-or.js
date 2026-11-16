const urlVolume = 0;
const savedVolume = undefined;

// Mixing ?? with || or && without parentheses is a SyntaxError, and then the script
// does not run at all. Remove the // in front of the next line to see it.
// const volume = urlVolume ?? savedVolume || 50; // SyntaxError: Unexpected token '||'

// With parentheses we say which grouping we mean.
console.log((urlVolume ?? savedVolume) || 50); // 50
console.log(urlVolume ?? (savedVolume || 50)); // 0
