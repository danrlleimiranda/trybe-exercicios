const p = document.querySelectorAll('.content p');
const body = document.querySelector('body');
const sectionBtn = document.querySelector('#background-color');
const btn = document.querySelectorAll('#background-color button');
console.log(btn[0].innerText)

function insertClass (classe) {
  for (let index = 0; index < p.length; index += 1) {
    p[index].className = classe;
  }
}
insertClass('paragraph');

function changeColor(){
    for (let index = 0; index < btn.length; index += 1) {
        body.style.backgroundColor =  btn[index].innerText
    }
}

sectionBtn.firstElementChild.addEventListener('click', changeColor)
