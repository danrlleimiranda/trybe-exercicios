
/*let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};
console.log('A jogadora', player.name, player.lastName, 'tem', player.age, 'de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(player.bestInTheWorld)
console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro', 'e', player.medals.silver, 'medalhas de prata')
*/
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    // console.log('Olá', names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car) {
    // console.log(key, car[key])
  }

  let customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};
console.log(customer1);
customer1.lastName = 'Faria'
console.log(customer1);

console.log(customer2);
customer2.lastName = 'Silva'
console.log(customer2);

let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  let lastName = 'Ferreira';
  
  function addProperty(object, key, value) {
    object[key] = value;
  };
  
  addProperty(customer, newKey, lastName);
  console.log(customer);
  
  newKey = 'fullName';
  let fullName = customer.firstName + ' ' + customer.lastName;
  
  addProperty(customer, newKey, fullName);
  console.log(customer);

  const student = {
    nome: 'Danrllei', 
    lastName: 'Miranda',
    'e-mail': 'danmiranda14@gmail.com',
    telefone: '99934-9391',
    GitHub: 'danrlleimiranda', 
    LinkedIn: 'https://www.linkedin.com/in/danrllei-miranda/'
  }
  
  student.idade = 23;
  student.altura = 1.85;
  console.log(student);
  