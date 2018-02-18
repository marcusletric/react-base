import React, { Component } from 'react';
import { API } from '../../utils/apiUtils.js';

import Navigation from '../../components/common/navigation/Navigation.js';
import ProductList from '../../components/brochure/productList/ProductList.js';

import './Brochure.css';

class Brochure extends Component {
    constructor() {
        super();

        this.products = [];
        this.state = {
            selectedCategory: '',
            categories: [],
            products: []
        };
    }

    switchCategory(categoryId) {
        this.setState({
            ...this.state,
            products: this.products.filter(
                product => product.categories.map(
                    category => category.id
                ).indexOf(categoryId) >-1 || !categoryId
            ),
            selectedCategory: categoryId
        });
    }

    buildProducts(products) {
        this.products = products;

        this.setState({
            ...this.state,
            products: products
        });
    }

    buildCategoryLinks(categories) {
        this.setState({
            ...this.state,
            categories: categories.map(
                category => ({
                    id: category.id,
                    href: '/brochure/' + category.id,
                    text: category.title
                })
            )
        });
    }

    componentDidMount() {
        API.getProducts().then((products) => {
            this.buildProducts(products);
            API.getCategories().then((categories) => {
                this.buildCategoryLinks(categories);
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        this.switchCategory(nextProps.match.params.id);
    }

    render() {
        return (
            <div className="Brochure">
                <Navigation navItems={this.state.categories} activeLink={this.props.match.url}/>
                <ProductList products={this.state.products}/>
            </div>
        );
    }
}

export default Brochure;
