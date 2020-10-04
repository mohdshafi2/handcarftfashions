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
                src="images/logo.png"
                width="150px"
                className="d-inline-block align-top"
            />{''}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <ul className="list-styled">
                <li>
                  <Link activeClassName='active' href='/'><a>Home</a></Link>
                </li>
                <li>
                  <Link activeClassName='active' href='/about'><a>About us</a></Link>
                </li>
                <li>
                  <Link activeClassName='active' href='/contact'><a>Contact</a></Link>
                </li>
                <li>
                  <Link activeClassName='active' href='/trends'><a>Trends</a></Link>
                </li>
                <li>
                  <Link activeClassName='active' href='/kids'><a>Kids</a></Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header

