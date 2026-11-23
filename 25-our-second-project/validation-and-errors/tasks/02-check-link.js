// Task 2: Only web links
// Lecture: Validating Input and Handling Errors
//
// An application may have a link to the job posting. A page that puts a link into
// an href runs a javascript: "link" when someone clicks it, so the server keeps
// only web links. Write checkLink(value) that returns { value } with the link to
// save, or { error } with the message the form shows under the field.
// - null, undefined and '' mean "no link": return { value: null }.
// - A link is text of at most 2000 characters that URL.parse() accepts (it returns
//   null for text that is not a URL) and whose protocol is 'http:' or 'https:'.
//   Trim the spaces around it first, and save it trimmed.
// - Everything else, a number included, returns
//   { error: 'Enter a full link that starts with https://' }.
// Careful: allow the two schemes you want rather than refusing the ones you know.
// 'JavaScript:alert(1)', 'data:text/html,hi' and 'ftp://files.example.com' all
// must fail, and so must 'jobs.example.com', which has no scheme at all.
//
// Examples:
//   checkLink('https://jobs.example.com/42')    { value: 'https://jobs.example.com/42' }
//   checkLink('  http://example.com ')          { value: 'http://example.com' }
//   checkLink('')                               { value: null }
//   checkLink('javascript:alert(1)')            { error: 'Enter a full link that starts with https://' }
//
// Run the tests: npm test -- 25-our-second-project/validation-and-errors

export function checkLink(value) {
    // Your code here
}
