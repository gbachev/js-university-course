export const wishlistMethods = {
    add(title) {
        this.titles.push(title);
        return this;
    },
    has(title) {
        return this.titles.includes(title);
    },
    count() {
        return this.titles.length;
    }
};

export function createWishlist(owner) {
    const wishlist = Object.create(wishlistMethods);
    wishlist.owner = owner;
    wishlist.titles = [];
    return wishlist;
}
