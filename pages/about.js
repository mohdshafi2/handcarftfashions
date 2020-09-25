import React from 'react'
import Layout from "../src/component/Layout/Layout";
import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";



const About = (props) => {
  return (
      <Layout titleTag="About Us">
        <div className="intro">
          <div className="mini-container">
            <h1>About US</h1>
            <Link href="/about"><a>Home / About Us</a></Link>
          </div>
        </div>
        <div className="intro bg-white m-0">
          <div className="mini-container">
            <h2>Welcome to Farmer Connect</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </div>
        <div className="textImg">
          <Container>
            <div className="textImgpanel">
              <div>
                <img src="/images/mission-pic.jpg" alt="mission"/>
              </div>
              <div>
                <h2 className="mx-0">Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
              </div>
            </div>
            <div className="textImgpanel">
              <div>
                <img src="/images/team.jpg" alt="mission"/>
              </div>
              <div>
                <h2 className="mx-0">Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
              </div>
            </div>
          </Container>
        </div>
        <div className="intro bg-white m-0">
          <Container>
            <h2>FAQ</h2>
            <div className="faq">
              <div className="faqPanel">
                <h4>What is Farmer Connect</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
              </div>
              <div className="faqPanel">
                <h4>Why we use Farmer Connect</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
  )
}

export default About



