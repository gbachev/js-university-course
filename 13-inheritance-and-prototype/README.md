# 13. Inheritance and Prototype

How objects inherit in JavaScript: the prototype chain, `Object.create()`, constructor functions, classes with `extends` and `super`, private and static members, polymorphism and mixins.

1. Section Overview (no code)
2. [Prototype](prototype) - read and change the `[[Prototype]]` link, and how shadowing works
3. [Inheritance](inheritance) - chains built by hand, own vs inherited properties, `instanceof` vs `isPrototypeOf()`
4. [Object.create()](object-create) - create objects with a given prototype, descriptors and `Object.create(null)`
5. [Constructor Functions](constructor-functions) - what `new` does, the `prototype` property and inheritance between constructors
6. [Classes](classes) - the class syntax, getters and setters, class fields and the stricter rules
7. [The super Keyword](the-super-keyword) - `extends`, `super()` and `super.method()`, and extending built-ins
8. [Private Fields and Static Properties](private-fields-and-static-properties) - `#private` fields and methods, static members and factories
9. [Polymorphism](polymorphism) - overriding methods, replacing a `switch` on type, and duck typing
10. [Multiple Inheritance / Mixins](multiple-inheritance-mixins) - object mixins, mixin factories and composition
11. [Best Practices](best-practices) - habits for classes and prototypes that stay easy to read
12. Section Review (no code)
