import React, { Component } from 'react';
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Label,
  CardText,
  CardFooter,
  FormGroup,
} from 'reactstrap';


import Navbar from '../LandingPage/Navbar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

import MultiStepProgressBar from './MultiStepProgressBar';
const { handleSubmit, register, getValues } = useForm;

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      pemasukan: '',
      email: '',
      username: '',
      password: '',
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Trigger an alert on form submission

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let { currentStep } = this.state;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep,
    });
  }

  _prev() {
    let { currentStep } = this.state;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    const { currentStep } = this.state;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
      );
    }
    
    // ...else return nothing
    return null;
  }

  get nextButton() {
    const { currentStep } = this.state;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 4) {
      return (
        <Button color="primary float-right" onClick={this._next}>
          Next
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    const { currentStep } = this.state;


    // If the current step is the last step, then render the "submit" button
    if (currentStep > 3) {
      return <Button color="primary float-right">Submit</Button>;
    }
    // ...else render nothing
    return null;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { pemasukan, email, username, password } = this.state;
    console.log(getValues('pemasukan'))
    alert(`Your registration detail: \n 
      Pemasukan: ${pemasukan} \n 
      Username: ${username} \n
      Password: ${password}`);
  };


  render() {
    return (
      <>
      < Navbar/>
      <Form onSubmit={this.handleSubmit}>
        <Row>
        <Card>
          <CardHeader>Check Keuangan mu!</CardHeader>
          <CardBody>
            <CardTitle>
              <MultiStepProgressBar currentStep={this.state.currentStep} />
            </CardTitle>
            <CardText />
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              pemasukan={this.state.pemasukan}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.username}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.password}
            />
            <Step4
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.s}
            />
            <Step5
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.s}
            />
          </CardBody>
          <CardFooter>
            {this.previousButton}
            {this.nextButton}
            {this.submitButton}
          </CardFooter>
        </Card>
        </Row>
      </Form>
      </>
    );
  }
}

export default MasterForm;
