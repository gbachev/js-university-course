// The connection tells us http or https. A proxy's header may replace that, but
// only when we trust the proxy: without a proxy in front, the header came from the
// client, who could claim anything. A list from several proxies starts with the
// protocol the first one saw, the one the browser used.
export function ownOrigin(req, trustProxy) {
    let protocol = req.socket.encrypted ? 'https' : 'http';

    const forwarded = req.headers['x-forwarded-proto'];
    if (trustProxy && forwarded) {
        protocol = forwarded.split(',')[0].trim();
    }

    return `${protocol}://${req.headers.host}`;
}
