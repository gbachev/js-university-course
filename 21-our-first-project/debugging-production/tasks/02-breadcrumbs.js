// Task 2: The last five steps
// Lecture: Debugging in Production
//
// Our report.js keeps its breadcrumbs in one array of the module. Write
// createBreadcrumbs(limit) that returns an object with two methods: add(action) adds a
// short action name such as 'search', and list() returns the kept actions, oldest
// first. Only the last `limit` actions are kept (5 when no limit is given). list()
// returns a copy: changing it must not change the breadcrumbs. Two buffers made by
// createBreadcrumbs() do not share their actions.
//
// Examples:
//   const crumbs = createBreadcrumbs(2);
//   crumbs.add('start'); crumbs.add('search'); crumbs.add('add result');
//   crumbs.list()   // ['search', 'add result']
//
// Run the tests: npm test -- 21-our-first-project/debugging-production

export function createBreadcrumbs(limit = 5) {
    // Your code here
}
