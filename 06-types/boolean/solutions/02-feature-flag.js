export function isFeatureOn(flag) {
    // valueOf() gives the primitive inside a wrapper, and a plain boolean as it is.
    return flag.valueOf();
}
