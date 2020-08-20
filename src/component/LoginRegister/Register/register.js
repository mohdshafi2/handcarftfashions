import React, { Component } from 'react'
import RegisterStep1 from "./registerStep1";
import RegisterStep2 from "./registerStep2";
import RegisterStep3 from "./registerStep3";
import Button from "react-bootstrap/Button";
import '../LoginRegister.scss'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      first:  'ddd',
      last: '',
      email: '',
      mobile: '',
      otp: '',
      address: '',
      apartment: '',
      pin: '',
      city: '',
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
    const { first, last, email, mobile, otp, address, apartment, pin, city } = this.state
    alert(`Your registration detail: \n 
           First: ${first} \n 
           Last: ${last} \n
           Email: ${email} \n 
           Mobile: ${mobile} \n
           Otp: ${otp} \n
           Address: ${address} \n 
           Apartment: ${apartment} \n 
           Pin: ${pin} \n 
           City: ${city}
           `)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
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
    if(currentStep <3){
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

            <RegisterStep1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
            />
            <RegisterStep2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
            />

            <RegisterStep3
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

export default Register