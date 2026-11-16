const title = `<img src="x" onerror="alert('Hacked')">`;
const item = document.createElement("li");
item.innerHTML = title;
document.querySelector("#books").append(item);
console.log(item.firstElementChild.nodeName); // IMG
// No alert: the console reports that the policy blocked the inline onerror code.
