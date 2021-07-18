import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid  from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
import GifGridItem from './../../components/GifGridItem';

// Con este mocl fingire cualquier llamada a ese archivo y suponer o controlar la informaición que eso va a responder
jest.mock('../../hooks/useFetchGifs');

describe('Testing on <GifGrid />', () => {

    const category = 'One Punch'
    // Simulo que ya tiene cierta data
    test('should show correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category = { category } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should show items when the images are loaded with useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];
        // Simulo que ya tiene cierta data
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category = { category } /> );
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });

});