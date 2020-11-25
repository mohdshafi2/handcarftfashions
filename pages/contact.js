import React from 'react'
import Layout from "../src/component/Layout/Layout";
import {Col, Container, Row} from "react-bootstrap";



const Contact = (props) => {
    return (
        <Layout titleTag="Contact Page">
            <div className="contact">
                <div className="intro">
                    <div className="container">
                        <div className="intro_txt">
                            <h1>Contact Us</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <main>
                <Container>
                    <div className="contactSection">
                        <Row>
                            <Col xs={12} sm={3}></Col>
                            <Col xs={12} sm={6}>
                                <h2 className="thems">Visiting Card</h2>
                                <div className="visCard">
                                    <img src="images/Hand-craft.jpg" />
                                </div>    
                            </Col>
                            <Col xs={12} sm={3}></Col>
                            <Col xs={12} sm={6} md={4}>
                                <div className="contactBox">
                                    <span className="contactIcon">
                                        <img src="images/co-2.png" alt="location" width="25px"/>
                                    </span>
                                    <h4>Address</h4>
                                    <p> 
                                    <address>
                                        H.No: 1-4-3, Beside Municipal Offic, Mahabubabad, Telangana, 506101
                                    </address>
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <div className="contactBox">
                                    <span className="contactIcon">
                                        <img src="images/co-1.png" alt="email" width="30px"/>
                                    </span>
                                    <h4>Email id</h4>
                                    <a href="mailto:webmaster@example.com">handcraftfashions@gmail.com</a>
                                </div>
                            </Col>
                            <Col xs={12} sm={4} md={4}>
                                <div className="contactBox">
                                    <span className="contactIcon">
                                        <img src="images/co-3.png" alt="call" width="30px"/>
                                    </span>
                                    <h4>Mobile</h4>
                                    <p>+91 9063 5116 72</p>
                                    <p>+91 9866 4101 31</p>
                                </div>
                            </Col>
                        </Row> 
                    </div>   
                </Container>
                </main>
            </div>
        </Layout>
    )
}

export default Contact



