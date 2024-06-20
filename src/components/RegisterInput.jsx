import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <Form className="rounded p-6s p-sm-3 wd">
      <Form.Group className="mb-4" controlId="formBasicName">
        <Form.Control
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Control
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
      </Form.Group>
      <Button className="btnlogin" variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
