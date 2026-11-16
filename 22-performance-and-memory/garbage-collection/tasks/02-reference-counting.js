// Task 2: Why reference counting fails
// Lecture: Garbage Collection
//
// Old engines freed a value when the number of references to it dropped to zero. Let's
// count them on the same kind of heap as in task 1 (each key lists the names it
// references). Write countReferences(heap, roots): it returns an object with every name
// of the heap as a key and the number of references pointing at it as the value. Each
// root in roots adds one reference to its name too. A value that is never referenced
// gets 0. The tests also show the problem: a cycle keeps its counts above zero.
//
// Examples:
//   countReferences({ globals: ['cart'], cart: [], mug: [] }, ['globals'])
//   // { globals: 1, cart: 1, mug: 0 }
//   countReferences({ order: ['invoice'], invoice: ['order'] }, [])
//   // { order: 1, invoice: 1 }: never 0, so never freed
//
// Run the tests: npm test -- 22-performance-and-memory/garbage-collection

export function countReferences(heap, roots) {
    // Your code here
}
