import React from 'react';
import { Link } from 'react-router';
import {
  NavbarToggler,
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false
    };
  }

  toggleNavbar(e) {
    e.preventDefault();
    this.setState(state => ({
      showNavbar: !state.showNavbar
    }));
  }

  render() {
    return (
      <Navbar className="header" color="faded" light expand="md">
        <Container>
          <NavbarToggler onClick={this.toggleNavbar} />
          <NavbarBrand className="mr-auto" tag={Link} to="/">
            二进制学院
          </NavbarBrand>
          <Collapse navbar isOpen={this.state.showNavbar}>
            <Nav navbar className="ml-sm-auto">
              <NavItem>
                <NavLink href="/#jp1">
                  <i className="text">课程体系</i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#jp2">
                  <i className="text">师资力量</i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#jp3">
                  <i className="text">教学理念</i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/video-react/video-react">
                  关于
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
