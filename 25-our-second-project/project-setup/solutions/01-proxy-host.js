export function proxyHost(entry, browserHost) {
    // The short form is a string, and Vite turns changeOrigin on for it.
    const options =
        typeof entry === 'string' ? { target: entry, changeOrigin: true } : entry;
    return options.changeOrigin ? new URL(options.target).host : browserHost;
}
