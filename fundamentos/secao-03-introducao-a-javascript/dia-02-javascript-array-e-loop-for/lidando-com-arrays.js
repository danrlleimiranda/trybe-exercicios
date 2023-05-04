/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
for (let index = 0; index < numbers.length; index += 1) {
    // console.log(numbers[index]);
    sum += numbers[index]
    console.log(sum)
}

let media = sum / numbers.length
console.log(media)

if (media > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
 } 
*/

/* let biggerValue = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > biggerValue) {
        biggerValue = numbers[i]
    }         
    
} 
console.log(biggerValue)
*/
/* let numerosImpares = 0
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
    numerosImpares += 1
   
    } 
}
 if (numerosImpares === 0) {
    console.log('Nenhum valor impar encontrado');
    }


console.log (numerosImpares) */

/*let smallerValue = 200;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < smallerValue) {
        smallerValue = numbers[i]
    }         
    
} 
console.log(smallerValue) */
/*
let arrayNumbers = [];
for (let c = 1; c <= 25; c += 1) {
    arrayNumbers.push(c)
    
}
console.log(arrayNumbers);

for (let index = 0; index < arrayNumbers.length; index += 1) {
    console.log(arrayNumbers[index] / 2)
} */

let fatorial = 1;
for (let c = 10; c > 0; c -= 1) {
    fatorial *= c
} 
console.log(fatorial)