const newElement = document.createElement('h1');
const body = document.getElementsByTagName('body')[0];
body.appendChild(newElement);
newElement.innerText = 'TrybeTrip - Agência de Viagens';
newElement.className = 'title'

const newMain = document.createElement('main');
body.appendChild(newMain);
newMain.className = 'main-content'

const newSection = document.createElement('section');
newMain.appendChild(newSection);
newSection.className = 'center-content';

const newP = document.createElement('p');
newSection.appendChild(newP)

const newSection2 = document.createElement('section');
newMain.appendChild(newSection2);
newSection2.className = 'left-content';

const newSection3 = document.createElement('section');
newMain.appendChild(newSection3)
newSection3.className = 'right-content';

const image = document.createElement('img')
newSection2.appendChild(image);
image.setAttribute('src', 'https://picsum.photos/200')
image.className = 'small-image';

const list = document.createElement('ul')
newSection3.appendChild(list);
function createItens() {
    let itens = document.createElement('li')
    list.appendChild(itens)

}

createItens();
const arrayList = document.getElementsByTagName('li');
const arrayExtenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

function repeatCreation() {
    
    for (let index = 0; index < 9; index += 1) {
        arrayList[index] = createItens()
    }
}
repeatCreation();

const listText = document.querySelectorAll('li');
function insertContent () {
for (let index = 0; index < arrayExtenso.length; index += 1) {
   listText[index].innerText = arrayExtenso[index];
    }
}

insertContent()
function creatSub() {
const createSub = document.createElement('h3')
newMain.appendChild(createSub)
}
creatSub();
const arraySub = document.getElementsByTagName('h3');
console.log(arraySub)
function insertSub() {
    for (let index = 0; index < 2; index += 1) {
        arraySub[index] = creatSub();
    }
}
insertSub();

arraySub[0].className = 'description';
arraySub[1].className = 'description';
arraySub[2].className = 'description';

newMain.removeChild(newSection2);

newSection3.style.marginRight = 'auto';

newMain.style.backgroundColor = 'green'

list.removeChild(list.lastElementChild);
list.removeChild(list.lastElementChild);
