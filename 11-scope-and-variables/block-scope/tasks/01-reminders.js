// Task 1: The reminders
// Lecture: Block Scope
//
// scheduleReminders(tasks, notify) sets one timer per task: the first task is sent to
// notify one second later, the second after two seconds, and so on. Right now notify
// gets undefined every time: the loop uses var, so all the timer callbacks share one i,
// and when they run the loop has finished. Fix it so every callback gets the task of
// its own iteration. An empty list sets no timers.
//
// Examples:
//   scheduleReminders(['Pay rent', 'Call mom'], console.log);
//   // a second later: Pay rent
//   // two seconds later: Call mom
//
// Run the tests: npm test -- 11-scope-and-variables/block-scope

export function scheduleReminders(tasks, notify) {
    for (var i = 0; i < tasks.length; i++) {
        setTimeout(() => notify(tasks[i]), (i + 1) * 1000);
    }
}
