import React from 'react';
import {
  FormGroup, Label, Input, Button,
} from 'reactstrap';

function Step5(props) {
  if (props.currentStep !== 5) {
    return null;
  }


  return (
    <>
      <h2>Result</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}

export default Step5;
