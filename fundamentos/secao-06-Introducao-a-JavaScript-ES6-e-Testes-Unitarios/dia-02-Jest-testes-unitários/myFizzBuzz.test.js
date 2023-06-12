const myFizzBuzz = require('./myFizzBuzz');


    test('Caso o parâmetro seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });
    test('Caso o parâmetro seja um número divisível apenas por 3, a função retorna "fizz"', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    });
    test('Caso o parâmetro seja um número divisível apenas por 5, a função retorna "buzz".', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    });
    test('Caso o parâmetro seja um número que não é divisível nem por 3 nem por 5, retorna o próprio parâmetro', () => {
        expect(myFizzBuzz(11)).toBe(11)
    });
    test('Caso o parâmetro não seja um número, a função retorna false.', () => {
        expect(myFizzBuzz('dez')).toBe(false)
    });