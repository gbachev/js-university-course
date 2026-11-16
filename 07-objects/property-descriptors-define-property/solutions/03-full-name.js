export function addFullName(person) {
    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(name) {
            const parts = name.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        },
        enumerable: false,
    });

    return person;
}
