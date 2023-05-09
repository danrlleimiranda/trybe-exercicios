function substituaX(nome) {
const frase = 'Tryber x aqui!'
let fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome
        }
    }
    return fraseArray.join(' ')
}
console.log(substituaX('Bebeto'))