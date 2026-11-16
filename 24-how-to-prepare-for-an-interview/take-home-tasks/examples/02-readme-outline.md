# Orders

Lists the orders from the demo API, filters them by status
and shows the total of the orders on screen.

Live: https://orders-demo.example.com

## Run it

Needs Node 22.12 or newer.

    npm install
    npm run dev
    npm test

## Decisions and trade-offs

- Plain JavaScript with Vite: one table needs no framework.
- Amounts are whole cents, so the totals stay exact.
- The total follows the filter, as agreed by email.

## Not done (time box: 4 hours)

- Paging: the API returns at most 50 orders.
- Sorting by column.
- Tests for the DOM code. Only src/orders.js is tested.

## Next steps

- Keep the filter in the URL, so a shared link keeps it.
- Sorting by date and by amount.
- End-to-end tests for the filter in a real browser.
