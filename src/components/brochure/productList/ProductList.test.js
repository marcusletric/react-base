import React, { Component } from 'react';
import {mount} from 'enzyme';
import ProductList from './ProductList';
import { productsStub } from '../../../constants/Stubs';

describe('ProductList component', () => {
    let wrapper;
    let renderFN = () => {
        return mount(<ProductList products={productsStub}/>);
    };

    beforeEach(() => {
        wrapper = renderFN();
    });

    it('Should render the component', () => {
        renderFN();
    });

    it('Should render products', () => {
        expect(wrapper.find('.product').length).toBe(2);
    });

    it('Should filter products', () => {
        wrapper.instance().updateSearchTerm('a');
        expect(wrapper.find('.product').at(0).text()).toBe('a');
    });

    it('Should reset filtering when new data arrives', () => {
        wrapper.instance().updateSearchTerm('a');
        wrapper.setProps({products: productsStub});
        expect(wrapper.find('.product').length).toBe(2);
        expect(wrapper.instance().state.searchTerm).toBe('');
    })
});
