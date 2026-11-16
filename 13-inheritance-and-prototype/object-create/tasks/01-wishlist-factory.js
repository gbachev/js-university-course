// Task 1: A wishlist factory
// Lecture: Object.create()
//
// Every user of our bookshop has a wishlist. The methods all wishlists share are
// ready in wishlistMethods. Write createWishlist(owner): it creates a new object with
// Object.create(), linked to wishlistMethods, and gives it its own owner and its own
// empty titles array. Every wishlist keeps only owner and titles as own properties,
// and the methods stay on wishlistMethods.
//
// Examples:
//   const wishlist = createWishlist('Jane Doe');
//   wishlist.add('Dune').add('Emma');
//   wishlist.count()             // 2
//   wishlist.has('Dune')         // true
//   Object.keys(wishlist)        // ['owner', 'titles']
//
// Run the tests: npm test -- 13-inheritance-and-prototype/object-create

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
    // Your code here
}
