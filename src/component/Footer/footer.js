import React from 'react'
import './footer.scss'
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
  return (
      <footer>
        <Container>
          <div className="footer-strip">
            <Row>
              <Col sm={12} md={6}>
                <p>Handcraft Fashions - India.</p>
              </Col>
              <Col sm={12} md={6}>
                <ul className="list-styled">
                  <li><Link href="/"><a>Home</a></Link></li>
                  <li><Link href="/about"><a>About Us</a></Link></li>
                  <li><Link href="/login-register"><a>Login/Signup</a></Link></li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
  )
}

export default Footer

