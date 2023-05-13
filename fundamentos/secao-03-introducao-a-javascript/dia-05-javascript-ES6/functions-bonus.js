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
// console.log(substituaX('Bebeto'))
    
function minhasSkills(frase) {
    const skills = ['JavaScript', 'HTML', 'CSS']
    let result = `${frase}
    Minhas três principais habilidades são:`
    for (let index = 0; index < skills.length; index += 1) {
        result = `${result}
        - ${skills[index]}`
        
    }
    return result;
}
console.log(minhasSkills(substituaX('Bebeto')))