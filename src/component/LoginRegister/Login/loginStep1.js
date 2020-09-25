import React from "react";
import Form from 'react-bootstrap/Form'

function LoginStep1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
      <React.Fragment>
        <Form.Group>
          <Form.Control
              id="mobileLogin"
              name="Mobile"
              type="text"
              placeholder="Mobile Number"
              value={props.mobileLogin}
              onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Form.Group>
          <p><a href="">Forget Password ?</a></p>
        </Form.Group>
      </React.Fragment>
  );
}

export default LoginStep1