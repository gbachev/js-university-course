// Task 3: What nvm use picks
// Lecture: Node and NVM
//
// Inside a project folder, nvm use reads .nvmrc and switches to the newest installed
// version that matches it. Write pickVersion(installed, nvmrc). installed is the list
// nvm ls shows, like ['v22.22.2', 'v24.22.3', 'v26.13.1']. nvmrc is the text of the
// file: a major ('24'), a major and minor ('24.22') or a full version ('24.22.3'),
// with or without a leading 'v' and usually with a newline at the end. Return the
// newest installed version that starts with those numbers, or null when none is
// installed (nvm then asks us to run nvm install). '2' must not match 'v24.22.3'.
//
// Examples:
//   pickVersion(['v24.11.0', 'v24.22.3', 'v26.13.1'], '24\n')   // 'v24.22.3'
//   pickVersion(['v24.22.3'], 'v26')                             // null
//
// Run the tests: npm test -- 20-tooling/node-and-nvm

export function pickVersion(installed, nvmrc) {
    // Your code here
}
