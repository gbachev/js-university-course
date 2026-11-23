const SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS'];

// One exact comparison of whole strings: scheme, host and port must all match, so
// another port, http instead of https, a sibling subdomain and a longer lookalike
// name are all refused.
export function shouldRefuse(req) {
    const origin = req.headers.origin;
    const ownOrigin = `${req.protocol}://${req.host}`;
    return !SAFE_METHODS.includes(req.method) && origin !== undefined && origin !== ownOrigin;
}
