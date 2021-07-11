import { getImagen } from '../../base/11-async-await'

describe('Testing with async-await y fetch', () => {

    test('Should return the url of the image', async() => {

        const url =  await getImagen();

        expect( typeof url ).toBe( 'string' );

    });
});