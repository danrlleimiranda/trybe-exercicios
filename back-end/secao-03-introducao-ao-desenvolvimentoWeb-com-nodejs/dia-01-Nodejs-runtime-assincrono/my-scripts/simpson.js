const fs = require('fs').promises;
const path = require('path');

const readSimpson = async () => {
    try {
        const simpsons = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
        const simpsonsParsed = await JSON.parse(simpsons);
        simpsonsParsed.forEach((simpson) => {
            console.log(simpson.id, ' - ', simpson.name);
        })
    } catch (err) {
        console.error(err.message);
    }



}





const findSimpsonById = async (id) => {
    const simpsons = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
    const simpsonsParsed = await JSON.parse(simpsons);

    const chosenOne = simpsonsParsed.find((simpson) => Number(simpson.id) === id);

    if (!chosenOne) {
        throw new Error('id não encontrado')
    }

    return chosenOne;
}


const removeSimpsonsById = async (id) => {
    try {
        const simpsons = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
        const simpsonsParsed = await JSON.parse(simpsons);
        const newSimpsons = simpsonsParsed.filter((simpson) => Number(simpson.id) !== id)
        await fs.writeFile(path.resolve(__dirname, './simpsons.json'), JSON.stringify(newSimpsons))
        console.log('Arquivo escrito com sucesso!');

    } catch(error) {
        console.log(error.message)
    }
}

const createNewFile = async () => {
    try {
        const simpsons = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
        const simpsonsParsed = await JSON.parse(simpsons);
        const newSimpsons = simpsonsParsed.filter((simpson) => Number(simpson.id) >= 1 && Number(simpson.id) <= 4 )
        await fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), JSON.stringify(newSimpsons))
        console.log('Arquivo escrito com sucesso!');
        
    } catch(error) {
        console.log(error.message)
    }
}


const changeFile = async (character) => {
    try {
        const simpsons = await fs.readFile(path.resolve(__dirname, './simpsonFamily.json'));
        const simpsonsParsed = await JSON.parse(simpsons);
        const newSimpsons = [...simpsonsParsed, {...character}]
        await fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), JSON.stringify(newSimpsons))
        console.log('Arquivo escrito com sucesso!');
        
    } catch(error) {
        console.log(error.message)
    }
}

const changeFamily = async (id, name) => {
    try {
        const simpsons = await fs.readFile(path.resolve(__dirname, './simpsonFamily.json'));
        const simpsonsParsed = await JSON.parse(simpsons);
        const RemoveNelson = simpsonsParsed.filter((simpson) => Number(simpson.id) !== id );
        const newSimpsons = [...RemoveNelson, {id: `${id}`, name}]
        await fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), JSON.stringify(newSimpsons))
        console.log('Arquivo escrito com sucesso!');
        
    } catch(error) {
        console.log(error.message)
    }
}

const main = async () => {
    // await readSimpson();
    // const simpson = await findSimpsonById(1);
    // await removeSimpsonsById(10)
    // await removeSimpsonsById(6)
    // await createNewFile();
    // await changeFile({id: '15', name: 'Nelson Muntz'});
    await changeFamily(15, 'Maggie Simpson');
}

main();
