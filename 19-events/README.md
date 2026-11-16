# 19. Events

How a page reacts to the user: listeners and the event object, bubbling and capturing, event delegation, passive listeners, forms and keyboard input, and our own custom events.

1. Section Overview (no code)
2. [Events Basics](events-basics) - `addEventListener()`, the event object, `preventDefault()`, the `once` and `signal` options, and `DOMContentLoaded` vs `load`
3. [Bubbling and Capturing](bubbling-and-capturing) - the three phases, `target` vs `currentTarget`, `stopPropagation()` and the events that do not bubble
4. [Event Delegation](event-delegation) - one listener on the parent, `closest()`, elements added later and `data-action`
5. [Passive Event Listeners](passive-event-listeners) - why wheel and touch listeners can hold up scrolling, and `{ passive: true }`
6. [Forms and Input Events](forms-and-input-events) - `submit`, `FormData`, `input` vs `change`, keyboard events and validation
7. [Custom Events and EventTarget](custom-events) - `CustomEvent`, `dispatchEvent()`, `detail`, `bubbles`, `cancelable` and `EventTarget` for our own objects
8. [Best Practices](best-practices) - removing listeners with a signal, delegating with `closest()`, `submit` with `FormData` and small listeners
9. Section Review (no code)
