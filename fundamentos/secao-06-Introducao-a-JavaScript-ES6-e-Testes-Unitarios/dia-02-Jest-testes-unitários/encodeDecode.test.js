const {mapString, encode, decode} = require('./encodeDecode');

describe('Testa as funções encode e decode', ()=> {

    test('Teste se encode e decode são funções', () => {
        expect(typeof encode && typeof decode).toBe('function')
    });
    
    test('teste se a vogal a é em 1.', () => {
        expect(encode('a')).toBe('1')
    });
    test('teste se a vogal e, é convertida em 2.', () => {
        expect(encode('e')).toBe('2')
    });
    test('teste se a vogal  i é convertida em 3.', () => {
        expect(encode('i')).toBe('3')
    });
    test('teste se a vogal  o é convertida 4.', () => {
        expect(encode('o')).toBe('4')
    });
    test('teste se a vogal u é convertida em 5', () => {
        expect(encode('u')).toBe('5')
    });
    
    test('teste se o número 1 é convertido na vogal a.', () => {
        expect(decode('1')).toBe('a')
    });
    test('teste se o número 2 é convertido nas vogal e.', () => {
        expect(decode('2')).toBe('e')
    });
    test('teste se o número 3 é convertido nas vogal i.', () => {
        expect(decode('3')).toBe('i')
    });
    test('teste se o número 4 é convertido nas vogal o.', () => {
        expect(decode('4')).toBe('o')
    });
    test('teste se o número 5 é convertido nas vogal u.', () => {
        expect(decode('5')).toBe('u')
    });
    test('converte apenas o número 1 na vogal a', () => {
        expect(decode('1n1')).toEqual('ana');
      });
      test('converte apenas o número 2 na vogal e', () => {
        expect(decode('2l2')).toEqual('ele');
      });
      test('converte apenas o número 3 na vogal i', () => {
        expect(decode('x3x3')).toEqual('xixi');
      });
      test('converte apenas o número 4 na vogal o', () => {
        expect(decode('4v4')).toEqual('ovo');
      });
      test('converte apenas o número 5 na vogal u', () => {
        expect(decode('n5')).toEqual('nu');
      });
});
