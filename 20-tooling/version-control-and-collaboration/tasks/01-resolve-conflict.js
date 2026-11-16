// Task 1: Resolve a merge conflict
// Lecture: Version Control and Collaboration
//
// After a conflict, Git writes both versions into the file between marker lines:
// '<<<<<<< HEAD', then our version, '=======', the incoming version, and
// '>>>>>>> branch-name'. Write resolveConflict(text, keep), which returns the text
// with every conflict resolved: keep is 'ours' to keep the HEAD version or 'theirs'
// to keep the incoming one. The marker lines go, every other line stays as it is.
// A file can have more than one conflict, or none.
//
// Examples:
//   const text = '<<<<<<< HEAD\nconst PAGE_SIZE = 25;\n=======\n' +
//       'const PAGE_SIZE = 20;\n>>>>>>> bigger-pages\n';
//   resolveConflict(text, 'ours')     // 'const PAGE_SIZE = 25;\n'
//   resolveConflict(text, 'theirs')   // 'const PAGE_SIZE = 20;\n'
//
// Run the tests: npm test -- 20-tooling/version-control-and-collaboration

export function resolveConflict(text, keep) {
    // Your code here
}
