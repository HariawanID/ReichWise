import React from 'react';
import {
  FormGroup, Label, Input, Button,
} from 'reactstrap';

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <p>We recommend creating a secure password for your account</p>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="username"
          id="password"
          placeholder="Enter your Password"
          value={props.username} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
}

export default Step3;
