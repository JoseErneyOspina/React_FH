import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import  GifGridItem  from '../../components/GifGridItem';

describe('Testing at <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title = { title } url = { url } /> );

    test('should show correctly the component', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('shoul have a paragraph with the title', () => {

        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title );

    });

    test('should have a image equal to url and alt of the props', () => {

        const img = wrapper.find('img');
        // console.log( img.html() );
        // console.log( img.props().scrc ); // con las props
        // console.log( img.prop( 'src' ) ); // una sola propiedad

        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );

    });

    test('should have a className animate_fadeIn', () => {

        const div = wrapper.find( 'div' );
        //anmate_fadeIn
        // console.log( div.props() );
        // console.log( div.prop( 'className' ) );
        const className = div.prop( 'className' );

        expect( className.includes( 'animate_fadeIn' ) ).toBe( true );

    });

});