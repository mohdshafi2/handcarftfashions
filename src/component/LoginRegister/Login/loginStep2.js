import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

function LoginStep2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return(
      <React.Fragment>
      <Form>
        <Form.Group>
          <Form.Control
              id="otpLogin"
              name="otp"
              type="text"
              placeholder="OTP"
              value={props.otpLogin}
              onChange={props.handleChange}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" className="float-right">Login</Button>
      </React.Fragment>
  );
}

export default LoginStep2