import React from "react";
import Form from 'react-bootstrap/Form'

function RegisterStep1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
      <React.Fragment>
        <Form.Group>
          <Form.Control
              id="first"
              name="First Name"
              type="text"
              placeholder="First Name"
              value={props.first}
              onChange={props.handleChange}
          />
          <p>ERROR Validation</p>
        </Form.Group>
        <Form.Group>
          <Form.Control
              id="last"
              name="Last Name"
              type="text"
              placeholder="Last Name"
              value={props.last}
              onChange={props.handleChange}
          />
          <p className="text-success">Success Validation</p>
        </Form.Group>
        <Form.Group>
          <Form.Control
              id="email"
              name="Email"
              type="email"
              placeholder="Email ID"
              value={props.email}
              onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
              id="mobile"
              name="mobile"
              type="text"
              placeholder="Mobile Number"
              value={props.mobile}
              onChange={props.handleChange}
          />
        </Form.Group>
      </React.Fragment>
  );
}

export default RegisterStep1