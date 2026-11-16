// The look lives in CSS (.compact li in the style tag), and one write switches every row.
const list = document.querySelector('ul');
list.classList.add('compact');

const dune = list.firstElementChild;
console.log(getComputedStyle(dune).fontSize); // 14px
