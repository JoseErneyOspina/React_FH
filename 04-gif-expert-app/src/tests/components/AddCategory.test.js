import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from './../../components/AddCategory';

//ayuda
import '@testing-library/jest-dom';

describe('Testing at <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories = { setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories = { setCategories } />);
    })

    test('Should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should change the text box', () => {
        const input = wrapper.fid('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('Should no post the info on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Should call the setCategories and clean the text box', () => {
        const value = 'Hola Mundo';
        // Simular el inputChange
        wrapper.fin('input').simulate('change', { target: { value } });
        // Simular el submit
        wrapper.fin('form').simulate('submit', { preventDefault(){} });

        // setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        // Ejemplo de cuantas veces se llamo
        expect( setCategories ).toHaveBeenCalledTimes(1);
        // Ejemplo de que se llame con una función
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );


        // El valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');
    });

});