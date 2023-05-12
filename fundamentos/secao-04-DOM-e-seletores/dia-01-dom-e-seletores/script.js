const element = document.getElementById('where-are-you').parentNode;

element.style.color = 'green'

const child = document.getElementById('first-child-of-child');
child.innerText = 'First child - Simba'

console.log(element.firstElementChild);

const where = document.getElementById('where-are-you');
console.log(where.previousElementSibling);
console.log(where.nextSibling);
console.log(where.nextElementSibling);
console.log(element.lastElementChild.previousElementSibling);