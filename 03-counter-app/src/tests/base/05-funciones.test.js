import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Test in 05-funciones.js', () => {

    test('getUser should return an object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );
    })

    test('getUsuarioActivo should return an object', () => {

        const nombre = 'Jose';
        const usuarioActivoTest = {
            uid: 'ABC567',
            username: nombre
        };
        const usuarioActivo = getUsuarioActivo( nombre );

        expect( usuarioActivo).toEqual( usuarioActivoTest )

    });

});