import '@testing-library/jest-dom';
import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing the hooks', () => {

    test('Should return the initial state', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;
        // const { data, loading } = useFetchGifs( 'One Punch' );
        // console.log( data, loading );
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('Should return an array of imgs and the loading on false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });

});