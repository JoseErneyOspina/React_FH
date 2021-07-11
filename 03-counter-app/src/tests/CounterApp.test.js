import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Testing on <CounterApp />', () =>{

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('Should show <CounterApp /> correctly ', () =>{

        expect( wrapper ).toMatchSnapshot();
    });

    test('should return the dafault value of 100', () => {
        const wrapper = shallow( <CounterApp value = { 100 } /> );
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('100')
    });

    test('should increase with the +1 button', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('1');
    });

    test('should decrease with the -1 button', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('-1');
    });

    test('should reset to the default value', () => {
        const wrapper = shallow( <CounterApp value = { 5 } /> );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('5');
    });

});