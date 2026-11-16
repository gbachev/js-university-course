// Task 1: Find a free port
// Lecture: Development Servers and Live Reload
//
// When port 5173 is taken, Vite tries 5174, then 5175, and so on. Write
// nextFreePort(port, takenPorts): port is the port we ask for, takenPorts an array of
// the ports other programs already use. Return the first port, starting from port and
// counting up, that is not in takenPorts.
//
// Examples:
//   nextFreePort(5173, [])             // 5173
//   nextFreePort(5173, [5173, 5174])   // 5175
//   nextFreePort(4173, [5173])         // 4173
//
// Run the tests: npm test -- 20-tooling/development-servers-and-live-reload

export function nextFreePort(port, takenPorts) {
    // Your code here
}
