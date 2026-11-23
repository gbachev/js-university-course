// Task 4: The price list
// Lecture: Arrow Functions
//
// A first look at the page: write showPrices(prices, list), which shows every price of the
// array as an item of the list on the page, written like '€4.50' (two decimals), and
// returns the texts it showed. list is the empty <ul id="prices"> of the page. Use short
// arrow functions for the callbacks: one map() for the text, one for the item. The DOM gets
// a section of its own (18); for now three tools are enough:
//
//   document.createElement('li')   // a new, empty list item
//   item.textContent = '€4.50'     // the text of the item
//   list.append(itemA, itemB)      // puts the items into the list, in that order
//
// Examples:
//   showPrices([4.5, 12], list)   // ['€4.50', '€12.00'], the list shows both
//   showPrices([], list)          // [], the list stays empty
//
// Open the page: run npm run serve, then open
//   10-functions/arrow/tasks/04-price-list.html

export function showPrices(prices, list) {
    // Your code here
}
