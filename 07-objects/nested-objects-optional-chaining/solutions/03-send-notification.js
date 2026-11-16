export function notify(user, message) {
    // ?.() calls send only if it exists; ?? gives the fallback when the chain stopped.
    return user.settings?.notifier?.send?.(message) ?? 'not sent';
}
