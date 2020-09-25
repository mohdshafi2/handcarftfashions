import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import LoginStep1 from "./loginStep1";
import LoginStep2 from "./loginStep2";
import '../LoginRegister.scss'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      mobileLogin: '',
      otpLogin: '',
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { mobileLogin , otpLogin } = this.state
    alert(`Your Login detail: \n 
           MobileLogin: ${mobileLogin} \n
           OtpLogin: ${otpLogin}
           `)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1? 2: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
          <Button variant="secondary" className="float-left" onClick={this._prev}>Previous</Button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <2){
      return (
          <Button variant="primary" className="float-right" onClick={this._next}>Next</Button>
      )
    }
    return null;
  }

  render() {
    return (
        <React.Fragment>
          {/*<p>Step {this.state.currentStep} </p>*/}

          <form onSubmit={this.handleSubmit}>
            {/*
        render the form steps and pass required props in
      */}

            <LoginStep1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
            />

            <LoginStep2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
            />

            {this.previousButton()}
            {this.nextButton()}

          </form>
        </React.Fragment>
    );
  }
}

export default Login