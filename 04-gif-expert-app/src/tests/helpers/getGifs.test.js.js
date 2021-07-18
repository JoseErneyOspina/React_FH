import getGifs from './../../helpers/getGifs';

describe('Testing on getGifs.js Fetch', () => {

    test('Should bring 10 elements', async() => {

        const gifs = await getGifs('One Punch')

        expect( gifs.length ).toBe( 10 );
    });

    describe('Testing on getGifs.js Fetch', () => {

        test('Should bring 0 elements if we dont send anything', async() => {

            const gifs = await getGifs('')

            expect( gifs.length ).toBe( 0 );
        });

});