import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return(
            <div className="container">
            <Navbar expand="md">
                <i className="navbar-toggler fas fa-bars" onClick={this.toggleNav} />
                <NavLink className="text_logo" to="/">#ПроектНевидимые</NavLink>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/'>Главная</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/about'>О проекте</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Герои
                        </DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem tag={NavLink} className="nav-link text-center" to="/heroes/2017">
                            2017-2018
                        </DropdownItem>
                        <DropdownItem tag={NavLink} className="nav-link text-center" to="/heroes/2018">
                            2018-2019
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Болезни
                        </DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem tag={NavLink} className="nav-link text-center" to="/diseases/dtsp">
                            ДЦП
                        </DropdownItem>
                        <DropdownItem tag={NavLink} className="nav-link text-center" to="/diseases/autism">
                            Аутизм
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink className="nav-link" to='/help'>Как нам помочь</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/thanks'>Благодарности</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                <a className="donate_link" href="#">Помочь сейчас</a>
            </Navbar>
            </div>
        )
    }
}

export default Header;