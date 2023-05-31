
const checkList = (tech) => {if (tech.length === 0 || tech[0] === '') throw new Error('Vazio!');}

function createObj(tech, name) {
    const array = tech.sort();
    const newArray = [];
    for (let index = 0; index < array.length; index += 1) newArray.push({name: name, tech: array[index]}) 
    return newArray;
}

function techList(tech, name) {
    try {
        checkList(tech);
       return createObj(tech, name)
    } catch (error) {
        return error.message
    }
}

module.exports = techList;
