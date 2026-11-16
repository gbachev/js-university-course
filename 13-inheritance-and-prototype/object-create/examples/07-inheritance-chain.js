// Each Object.create() call adds one link to the chain.
const member = {
    describe() {
        return `${this.name} (${this.role})`;
    },
    canEdit() {
        return false;
    }
};

const editor = Object.create(member);
editor.role = 'editor';
editor.canEdit = function () {
    return true;
};

const jane = Object.create(editor);
jane.name = 'Jane Doe';

console.log(jane.describe()); // Jane Doe (editor)
console.log(jane.canEdit()); // true
console.log(Object.getPrototypeOf(jane) === editor); // true
console.log(Object.getPrototypeOf(editor) === member); // true
console.log(member.isPrototypeOf(jane)); // true
