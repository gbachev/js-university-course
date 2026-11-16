export function readDiscount(text) {
    try {
        return JSON.parse(text).coupon.percent;
    } catch (error) {
        if (error.name === 'SyntaxError') {
            return 0;
        }
        throw error;
    }
}
