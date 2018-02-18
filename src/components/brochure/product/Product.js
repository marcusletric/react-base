import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detailsVisible: false
        }
    }

    switchVisible() {
        this.setState({
            detailsVisible: !this.state.detailsVisible
        });
    }

    render() {
        return (
            <div className="product" onClick={() => {this.switchVisible()}}>
                <span className={this.state.detailsVisible ? "expanded" : ""}>{this.props.product.title}</span>
                {this.state.detailsVisible ?
                    <div className="details container">
                        <div className="row">
                            <div className="col-2">
                                <img src={this.props.product.images[365] ? this.props.product.images[365].src : ""}/>
                            </div>
                            <div className="col-10">
                                {this.props.product.description}
                            </div>
                        </div>
                    </div>
                : ''}
            </div>
        );
    }
}

export default Product;
