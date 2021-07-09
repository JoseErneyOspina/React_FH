import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Testing on functions of heroes at 08-imp-exp.js', () => {

    test('Should return a hero by ID', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
    });

    test('Should return undefined if heroe does not exist', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });

    // Task #1
    // Should return an array with the DC heroes
    // owner
    // toEqual to the filter array
    test('Should return an array with the DC heroes', () => {

        const owner = 'DC';
        const DCHeroes = getHeroesByOwner( owner );

        const heroesData = DCHeroes.filter( h => h.owner === owner );

        expect( DCHeroes ).toEqual( heroesData );
    });

    // Task #2
    // Should return an array with the Marvel heroes
    // length = 2 -> .toBe
    test('Should return an array with the Marvel heroes', () => {

        const owner = 'Marvel';
        const MarvelHeroes = getHeroesByOwner( owner );

        expect( MarvelHeroes.length ).toBe( 2 );
    });

});