// The only ORDER BY clauses that can reach the SQL. A Map, so that a sort such as
// 'toString' or '__proto__' finds nothing, as it would not with a plain object.
const ORDER_BY = new Map([
    ['newest', 'ORDER BY created_at DESC, id DESC'],
    ['oldest', 'ORDER BY created_at ASC, id ASC'],
    ['company', 'ORDER BY company ASC, id ASC'],
]);

export function listQuery(userId, { status, sort = 'newest' }) {
    const orderBy = ORDER_BY.get(sort);
    if (orderBy === undefined) {
        throw new Error(`sort must be one of: ${[...ORDER_BY.keys()].join(', ')}`);
    }

    let sql = 'SELECT * FROM applications WHERE user_id = ?';
    const params = [userId];
    if (status !== undefined) {
        sql += ' AND status = ?';
        params.push(status);
    }
    return { sql: `${sql} ${orderBy}`, params };
}
