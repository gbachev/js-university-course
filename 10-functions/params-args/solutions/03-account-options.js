export function createAccount({ email, plan = 'free', newsletter = false } = {}) {
    return { email, plan, newsletter };
}
