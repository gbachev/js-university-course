export function missingScripts(pkg, required) {
    const scripts = pkg.scripts ?? {};
    return required.filter((name) => !Object.hasOwn(scripts, name));
}
