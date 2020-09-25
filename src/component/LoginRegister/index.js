import React from 'react'
import Container from "react-bootstrap/Container";
import { Tabs, Tab } from 'react-bootstrap'
import Register from "./Register/register";
import Login from "./Login/login";
import './LoginRegister.scss'

const LoginTab = (props) => {
  return (
      <div className="loginTab">
        <Container>
          <div className="tabMain">
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
              <Tab eventKey="login" title="Login">
                <Login />
              </Tab>
              <Tab eventKey="register" title="Register">
                <Register />
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
  )
}

export default LoginTab

