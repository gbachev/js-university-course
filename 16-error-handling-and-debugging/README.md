# 16. Error Handling and Debugging

How to find bugs with DevTools, the console and the debugger, and how to handle errors in code: `try...catch`, `throw`, error objects, our own error classes and global handlers.

1. Section Overview (no code)
2. [DevTools: Breakpoints and Debugging](dev-tools) - breakpoints, stepping, watch expressions, logpoints, the `debugger` statement and pausing on exceptions
3. [Other Debugging Tools and Methods](other-debugging-tools) - the console beyond `log()`, debugging Node, and isolating a bug step by step
4. [try, catch and finally](try-catch-finally) - running risky code, cleanup in `finally`, rethrowing, and what `try...catch` does not catch
5. [throw and Error Objects](throw-and-error-objects) - throwing `Error` objects, the built-in error types, good messages and `cause`
6. [Custom Error Types](custom-error-types) - our own error classes with names and fields, and handling errors by type
7. [Global Error Handling](global-error-handling) - the `error` and `unhandledrejection` events, and their Node equivalents
8. [Best Practices](best-practices) - fail fast, catch only where useful, never an empty `catch`, one small error hierarchy
9. Section Review (no code)
