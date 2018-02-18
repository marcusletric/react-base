import React, { Component } from 'react';
import './SearchInput.css'

class SearchInput extends Component {

    render() {
        return (
            <div className="SearchInput">
                <input type="text" value={this.props.value} onChange={(event) => {this.props.change(event.target.value)}}/>
                <span>Search</span>
            </div>
        );
    }
}

export default SearchInput;
