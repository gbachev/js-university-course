// Reading a geometry value while the layout is stale forces a layout right there.
const list = document.querySelector('ul');

list.style.height = '200px';
list.style.border = '2px solid gray';

console.log(list.offsetHeight); // 204
