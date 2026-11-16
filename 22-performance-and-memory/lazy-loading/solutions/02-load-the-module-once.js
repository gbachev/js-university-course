export function createLazyLoader(load) {
    let loading = null;

    return function get() {
        if (loading === null) {
            loading = load().catch((error) => {
                loading = null; // forget the failure, so the next call tries again
                throw error;
            });
        }
        return loading;
    };
}
