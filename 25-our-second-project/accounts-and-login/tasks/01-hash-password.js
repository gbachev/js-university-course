// Task 1: Hash and check a password
// Lecture: Accounts and Logging In
//
// We never store a password, only a slow, salted hash of it. Write two async
// functions with crypto.scrypt from node:crypto.
//
// hashPassword(password) returns the text we store, in the shape
//   scrypt:N:r:p:salt:hash
// - N = 16384, r = 8 and p = 5 (one of OWASP's scrypt settings), written in decimal.
// - salt: 16 random bytes from randomBytes(), new for every password, in hex
//   (32 characters).
// - hash: the 64 bytes scrypt derives from the password and the salt with those
//   settings, in hex (128 characters).
//
// verifyPassword(password, stored) returns true when the password is the one that
// was hashed, and false otherwise.
// - Read N, r, p, the salt and the hash back from `stored`, and hash the attempt
//   the same way. Use the settings of `stored`, not your constants: a hash from
//   before we raised the cost must still work.
// - Compare the two hashes with timingSafeEqual(), never with === on the text.
//   timingSafeEqual() throws when the two lengths differ, so ask scrypt for as many
//   bytes as the stored hash has.
//
// crypto.scrypt takes a callback; promisify() from node:util turns it into a
// function that returns a promise.
//
// Examples:
//   await hashPassword('correct horse')
//   'scrypt:16384:8:5:f7867f259ababa3cd3ccd59cd36c1a3b:4349455a...' (different every time)
//   await verifyPassword('correct horse', stored)    true
//   await verifyPassword('correct horsE', stored)    false
//
// Run the tests: npm test -- 25-our-second-project/accounts-and-login

export async function hashPassword(password) {
    // Your code here
}

export async function verifyPassword(password, stored) {
    // Your code here
}
