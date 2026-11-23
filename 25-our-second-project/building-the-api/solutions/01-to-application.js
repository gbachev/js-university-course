// Every field by name: a column we add to the table later stays private until we
// add it here, and user_id never leaves the server.
export function toApplication(row) {
    return {
        id: row.id,
        company: row.company,
        role: row.role,
        status: row.status,
        appliedOn: row.applied_on,
        url: row.url,
        notes: row.notes,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
    };
}
