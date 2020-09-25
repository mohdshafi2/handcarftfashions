import React from "react";
import Form from 'react-bootstrap/Form'

function RegisterStep2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return(
      <React.Fragment>
        <Form.Group>
          <Form.Control
              id="otp"
              name="otp"
              type="text"
              placeholder="OTP"
              value={props.otp}
              onChange={props.handleChange}
          />
        </Form.Group>
      </React.Fragment>
  );
}

export default RegisterStep2