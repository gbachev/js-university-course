export function scheduleReminders(tasks, notify) {
    // let gives every iteration, and so every callback, its own i
    for (let i = 0; i < tasks.length; i++) {
        setTimeout(() => notify(tasks[i]), (i + 1) * 1000);
    }
}
