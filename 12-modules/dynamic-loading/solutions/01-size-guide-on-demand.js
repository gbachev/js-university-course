export function openSizeGuide() {
    // The module cache makes later calls reuse the module loaded by the first one.
    return import('./01-size-guide-on-demand/size-guide.js').then((guide) => {
        return guide.sizeGuideText();
    });
}
