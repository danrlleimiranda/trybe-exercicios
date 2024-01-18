const readline = require('readline-sync');

const n = readline.questionInt('Quantos números na sequência de fibonacci?');


const fibonacci = (n) => {

    if (n <= 0) {
        console.log('Enter a number greater then \'0\'!');
    }
        let sequence = Array.from(Array(n).keys())
        for(let index = 0; index < n; index += 1 ) {
            if(sequence[index]) {
                sequence[index + 1] = sequence[index - 1] + sequence[index]
            }
        }
  sequence.forEach((number) => {
    if(number !== 0) {
        console.log(`${n}: ${number}`)
    }
} );  
}


fibonacci(n);