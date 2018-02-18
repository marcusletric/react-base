import React, { Component } from 'react';
import {mount} from 'enzyme';
import Navigation from './Navigation';
import { navItemsPropMock } from '../../../constants/Stubs';

class MockLink extends Component{
    render() {
       return <div className={this.props.className}>{this.props.children}</div>;
    }
}

Navigation.__Rewire__('Link', MockLink);

describe('Navigation component', () => {
    let wrapper;
    let renderFN = () => {
        return mount(<Navigation brand={navItemsPropMock.brand} navItems={navItemsPropMock.navItems} activeLink={navItemsPropMock.activeLink}/>);
    };

    beforeAll(() => {
        wrapper = renderFN();
    });

    it('Should render the component', () => {
        renderFN();
    });

    it('Should render brand item', () => {
        expect(wrapper.find('.navbar-brand').length).toBe(1);
    });

    it('Should render nav elements', () => {
        expect(wrapper.find('.nav-item').length).toBe(2);
    });

    it('Should mark selected element', () => {
        expect(wrapper.find('.nav-link .selected').at(0).text()).toBe('b');
    })
});
