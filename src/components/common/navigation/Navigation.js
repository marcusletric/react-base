import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {

    renderBrand(props) {
        return props.brand ? <NavbarBrand href={props.brand.href}>{props.brand.text}</NavbarBrand> : '';
    }

    isSelected(href) {
        if(this.props.activeLink === href)
            return "selected";
        return "";
    }

    renderItems(props) {
        return props.navItems && props.navItems.map((navItem) => {
            return (
                <NavItem key={navItem.id} className="navItem">
                    <Link className={"nav-link " + this.isSelected(navItem.href)} to={navItem.href}>
                        {navItem.text}
                    </Link>
                </NavItem>
            )
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light>
                    {this.renderBrand(this.props)}
                    <Nav>
                        {this.renderItems(this.props)}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
