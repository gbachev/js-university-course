// Task 2: A link only for the web
// Lecture: Connecting the Front End
//
// Each row of the list shows the link to the job posting as an <a> element. The
// text of the row is safe with textContent, but an href of 'javascript:alert(1)'
// runs code when someone clicks it. The server refuses such links, and the page
// does not rely on that. Write linkFor(url) that returns what the <a> gets, or
// null when the row shows no link:
// - for a full http: or https: URL, return { href, text }: href is the url as it
//   was given, and text is its hostname (no port, no path), which the row shows.
// - for anything else return null: another scheme (javascript:, JavaScript:,
//   data:, ftp:), text with no scheme such as 'jobs.example.com', '', null and
//   undefined (an application without a link has url null).
// Careful: allow the two schemes you want rather than refusing the ones you know.
// new URL() throws for text that is not a full URL.
//
// Examples:
//   linkFor('https://jobs.example.com/42')    { href: 'https://jobs.example.com/42', text: 'jobs.example.com' }
//   linkFor('http://localhost:5173/jobs')     { href: 'http://localhost:5173/jobs', text: 'localhost' }
//   linkFor('javascript:alert(1)')            null
//   linkFor(null)                             null
//
// Run the tests: npm test -- 25-our-second-project/connecting-the-front-end

export function linkFor(url) {
    // Your code here
}
