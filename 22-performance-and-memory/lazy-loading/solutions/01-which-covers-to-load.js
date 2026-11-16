export function coversToLoad(covers, scrollTop, viewportHeight, margin) {
    const zoneTop = scrollTop - margin;
    const zoneBottom = scrollTop + viewportHeight + margin;
    return covers
        .filter((cover) => cover.top < zoneBottom && cover.top + cover.height > zoneTop)
        .map((cover) => cover.id);
}
