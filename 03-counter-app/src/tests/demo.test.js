describe('Pruebas en demo.js', () => {

    test('debe de ser iguales los strings', () => {

        // 1. Inicialización
        const mensaje = 'Hola mundo';

        // 2. Estimulo
        const mensaje2 = `Hola mundo`;

        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); // ==
    } )

});
