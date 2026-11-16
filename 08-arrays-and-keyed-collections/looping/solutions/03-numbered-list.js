export function numberTheList(titles) {
    const lines = [];

    // for...in gives the keys as strings ('0' + 1 is '01') and also the extra properties.
    for (let i = 0; i < titles.length; i++) {
        lines.push(i + 1 + '. ' + titles[i]);
    }

    return lines;
}
