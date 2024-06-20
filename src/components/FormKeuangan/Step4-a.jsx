import React from 'react';
import {
  FormGroup, Label, Input, Button,
} from 'reactstrap';

function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
      <p>We recommend creating a secure password for your account</p>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={props.password} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
}

export default Step4;
