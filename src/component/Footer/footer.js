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
              <Col sm={12} md={4} className="borl">
                <h4>Hand Craft Fashion</h4>
                <p>It is a long established fact that a reader<br></br> will be distracted by the readable content<br></br> of a page when looking at its layout.</p>
                <br></br>
              </Col>
              <Col sm={12} md={4} className="borl text-center-lg">
                <h5>Quick Menu</h5>
                <ul className="list-styled footer-menu">
                  <li><Link href="/about"><a>About Us</a></Link></li>
                  <li><Link href="/contact"><a>Contact US</a></Link></li>
                  <li><Link href="/kids"><a>Kids</a></Link></li>
                  <li><Link href="/womens"><a>Womens</a></Link></li>
                </ul>
                <br></br>
                <br></br>
              </Col>
              <Col sm={12} md={4} className="text-right-lg">
                <h5>Address</h5>
                <p>H.No: 1-4-3, <br></br>Beside Municipal Offic,<br></br> Mahabubabad, <br></br> Telangana, <br></br>506101.</p>
              </Col>
            </Row>
          </div>
          <div className="whatsapp_chat">
          <a target="_blank" href="https://wa.me/919063511672?text=Hi,%20HandCraftFashions" className="whatsup" ><i className="icon"></i></a>
        </div>
        </Container>
      </footer>
  )
}

export default Footer

