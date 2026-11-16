export function messageFeed(loadMessage, count) {
    return {
        [Symbol.asyncIterator]() {
            let index = 0;
            return {
                async next() {
                    if (index < count) {
                        const message = await loadMessage(index++);
                        return { value: message, done: false };
                    }
                    return { value: undefined, done: true };
                },
            };
        },
    };
}
