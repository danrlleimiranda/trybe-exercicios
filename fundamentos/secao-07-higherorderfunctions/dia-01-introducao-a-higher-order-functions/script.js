const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

// emailListInData.forEach((email) => {
//     console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// })


const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const found = numbers.find(number => number % 3 === 0 && number % 5 === 0);

// console.log(found)

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const nome = names.find((nome) => nome.length === 5)

// console.log(nome)

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui

  const id = musicas.find((musica) => musica.id === '31031685')

//   console.log(id)

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome1) => nome1 === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  verifyAges = (obj, age,) => {
    return obj.every((item) => item.age >= age)
  }
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));