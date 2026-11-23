// Task 2: The cookie to send back
// Lecture: Testing the API
//
// fetch() in Node keeps no cookies, so after a sign-up our tests take the session
// cookie from the answer and send it back in a Cookie header themselves. Write
// cookieFrom(response) that returns the part of the first Set-Cookie header a
// browser would send back: the name=value before the first ';'.
// - Read the Set-Cookie headers with response.headers.getSetCookie(), which gives
//   one string per cookie. headers.get('set-cookie') joins them with ', ', and an
//   Expires date has a comma of its own, so the joined text cannot be split back.
// - The value can contain '=': 'data=a=b; Path=/' gives 'data=a=b'.
// - Return null when the answer sets no cookie.
//
// Examples (Set-Cookie headers of the answer -> the result):
//   'sid=Kq3x-_9; Max-Age=604800; Path=/; HttpOnly'    'sid=Kq3x-_9'
//   'theme=dark' and then 'sid=Kq3x-_9; Path=/'        'theme=dark'
//   no Set-Cookie at all                               null
//
// Run the tests: npm test -- 25-our-second-project/testing-the-api

export function cookieFrom(response) {
    // Your code here
}
