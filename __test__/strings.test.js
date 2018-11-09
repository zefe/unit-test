describe('Comprobar cadena de texto', () => {
    const text = 'un bonito texto';
    test('debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });
    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/paula/);
    })
    test('Comprobar la longitud de una cadena de texto', () => {
        expect(text).toHaveLength(15);
    })
});