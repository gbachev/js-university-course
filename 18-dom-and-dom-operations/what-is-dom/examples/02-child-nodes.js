// childNodes holds every child node, of any kind, whitespace text included.
const nodes = document.body.childNodes;
console.log(nodes.length); // 5

for (const node of nodes) {
    console.log(`${node.nodeType} ${node.nodeName}`);
}
// 3 #text
// 1 H1
// 3 #text
// 1 UL
// 3 #text

const text = nodes[1].firstChild;
console.log(text.nodeType === Node.TEXT_NODE); // true
console.log(text.nodeValue); // To Read
