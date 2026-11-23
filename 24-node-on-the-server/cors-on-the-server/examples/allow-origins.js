// CORS by hand: lets the pages of the listed origins read our answers.
export function allowOrigins(origins) {
    return (req, res, next) => {
        const origin = req.headers.origin;

        if (origins.includes(origin)) {
            res.set('Access-Control-Allow-Origin', origin);
        }
        res.vary('Origin');

        if (req.method === 'OPTIONS') {
            res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
            res.set('Access-Control-Allow-Headers', 'Content-Type');
            res.set('Access-Control-Max-Age', '600');
            return res.status(204).end();
        }
        next();
    };
}
