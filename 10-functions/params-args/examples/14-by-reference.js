// Changing a property through the reference changes the original object.
function addFlag(obj) {
    obj.flagged = true;
}

const record = {};
addFlag(record);
console.log(record); // { flagged: true }

// Reassigning the parameter does not change the object outside.
function reassign(obj) {
    obj = { status: 'reset' };
}

let state = { status: 'ok' };
reassign(state);
console.log(state); // { status: 'ok' }
