export function keepFirst(messages, limit) {
    // Only shorten: a bigger length would add empty slots at the end.
    if (messages.length > limit) {
        messages.length = limit;
    }

    return messages;
}
