import React from 'react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';


describe('Testing on <PrimeraApp />', () => {

    // test('should show the message "Soy, Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo = { saludo } /> )
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // });

    test('should show <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } />);

        expect( wrapper ).toMatchSnapshot();
    });

    test('should return the subtitle send by props', () => {

        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimeraApp
                saludo = { saludo }
                subtitulo = { subtitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe( subtitulo );
    });
});