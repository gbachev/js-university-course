export function readFilters(address) {
    const params = new URL(address).searchParams;
    const page = Number(params.get('page'));

    return {
        query: params.get('q') ?? '',
        page: Number.isInteger(page) && page > 0 ? page : 1,
        tags: params.getAll('tag'),
    };
}
