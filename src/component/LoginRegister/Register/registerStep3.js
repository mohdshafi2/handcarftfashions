import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function RegisterStep3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
      <React.Fragment>
        <Form>
          <Form.Group>
            <FormControl
                id="address"
                as="textarea"
                rows="3"
                aria-label="With textarea"
                placeholder="Address"
                value={props.address}
                onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
                id="apartment"
                name="apartment"
                type="text"
                placeholder="Apartment / RWA "
                value={props.apartment}
                onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
                id="pin"
                name="Pin code"
                type="text"
                placeholder="Pin Code"
                value={props.pin}
                onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control as="select" value={props.city}
                          onChange={props.handleChange}>
              <option>City</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Button variant="primary" className="float-right">Sign Up</Button>
      </React.Fragment>
  );
}

export default RegisterStep3