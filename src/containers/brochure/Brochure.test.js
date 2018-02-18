import React from 'react';
import {mount} from 'enzyme';
import Brochure from './Brochure';
import { API } from '../../utils/apiUtils.js';
import { productsStub, categoriesStub } from '../../constants/Stubs';

jest.mock('../../utils/apiUtils');
jest.mock('../../components/common/navigation/Navigation.js');

API.getProducts = () => {return {then: (cb) => {cb(productsStub);}}};
API.getCategories = () => {return {then: (cb) => {cb(categoriesStub);}}};


describe('Brochure component', () => {
    let wrapper;
    let renderFN = () => {
        return mount(<Brochure match={{url: '/brochure', params: {id: ''}}}/>);
    };


    beforeAll(() => {
        wrapper = renderFN();
    });

    it('Should render the component', () => {
        renderFN();
    });

    it('Should load categories', () => {
        expect(wrapper.instance().state.categories.length).toBe(2);
    });

    it('Should load products', () => {
        wrapper.instance().switchCategory('');
        expect(wrapper.instance().state.products.length).toBe(2);
    });

    it('Should filter products', () => {
        wrapper.instance().switchCategory('b');
        expect(wrapper.instance().state.products.length).toBe(1);
        expect(wrapper.instance().state.products[0].id).toBe('b');
        wrapper.instance().switchCategory('a');
        expect(wrapper.instance().state.products.length).toBe(2);
    })
});
