import React from 'react'
import './header.scss'
import {Navbar, Nav, Container} from 'react-bootstrap'
import Link from './ActiveLink'

const Header = () => {
  return (
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img
                alt=""
                src=""
                width="0"
                height="0"
                className="d-inline-block align-top"
            />{' '}
            <span className="d-inline-block align-top">Farmer Connect</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <ul className="list-styled">
                <li>
                  <Link activeClassName='active' href='/'><a>Product</a></Link>
                </li>
                <li>
                  <Link activeClassName='active' href='/about'><a>About us</a></Link>
                </li>
                <li>
                  <Link activeClassName='active' href='/login-register'><a>Login/Signup</a></Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header

