function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function retry(task, attempts, delayMs) {
    let wait = delayMs;
    for (let attempt = 1; attempt <= attempts; attempt++) {
        try {
            // return await, so a rejection lands in our catch
            return await task();
        } catch (error) {
            if (attempt === attempts) {
                throw error;
            }
            await delay(wait);
            wait *= 2;
        }
    }
}
