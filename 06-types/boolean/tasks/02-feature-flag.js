// Task 2: Feature flag
// Lecture: Boolean
//
// Our app turns features on and off with flags. Most flags are plain booleans, but an
// old settings file gives us Boolean wrapper objects, like new Boolean(false). The
// function isFeatureOn(flag) should return true only when the flag holds true, but it
// turns every wrapper object on, because all objects are truthy. Fix it so it reads
// the value inside the flag and returns a primitive boolean.
//
// Examples:
//   isFeatureOn(true)                 // true
//   isFeatureOn(new Boolean(false))   // false
//   isFeatureOn(new Boolean(true))    // true
//
// Run the tests: npm test -- 06-types/boolean

export function isFeatureOn(flag) {
    if (flag) {
        return true;
    }
    return false;
}
