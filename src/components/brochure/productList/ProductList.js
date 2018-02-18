import React, { Component } from 'react';
import Product from '../product/Product';
import SearchInput from '../../common/searchInput/SearchInput';
import './ProductList.css';

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }
    }

    updateSearchTerm(keyword) {
        this.setState({
            searchTerm: keyword
        })
    }

    renderProducts(products, keyword) {
        return products.filter(
            product => product.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1 || keyword === ''
        ).map(
            product => <Product key={product.id} product={product}/>
        );
    }

    componentWillReceiveProps() {
        this.updateSearchTerm('');
    }

    render() {
        return (
            <div className="ProductList">
                <SearchInput value={this.state.searchTerm} change={(value) => {this.updateSearchTerm(value)}}/>
                {this.renderProducts(this.props.products, this.state.searchTerm)}
            </div>
        );
    }
}

export default ProductList;
