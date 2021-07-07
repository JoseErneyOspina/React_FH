import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template.js', () => {

    test('getSaludo should return hola fernando', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe(`Hola ${ nombre }`);
    });

    test('getSaludo should return Hola Carlos if there is not an argument', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe(`Hola Carlos`)
    });
});