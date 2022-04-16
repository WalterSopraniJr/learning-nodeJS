import  {pegaArquivo}  from '../index.mjs';

test('Deve ser uma função.', () => {
    expect(typeof pegaArquivo).toBe('function');
});