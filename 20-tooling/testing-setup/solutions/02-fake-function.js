export function createMock(implementation) {
    function mock(...args) {
        mock.calls.push(args);
        return implementation ? implementation(...args) : undefined;
    }
    mock.calls = [];
    mock.calledOnce = () => mock.calls.length === 1;
    return mock;
}
