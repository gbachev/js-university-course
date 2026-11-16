export function nextFreePort(port, takenPorts) {
    let free = port;
    while (takenPorts.includes(free)) {
        free++;
    }
    return free;
}
