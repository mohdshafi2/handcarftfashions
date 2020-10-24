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
                    <h2>The Contact form here..............</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elite.</p>
                </Container>
                </main>
            </div>
        </Layout>
    )
}

export default Contact



