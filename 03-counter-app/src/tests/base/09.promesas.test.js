import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Testing with promises on 09.promesas.test.js', () => {

    test('getHeroeByIdAsync should return an async Heroe', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });
    });

    test('Should return an error if the heroe by id does not exist ', ( done ) => {

        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });
    });

});