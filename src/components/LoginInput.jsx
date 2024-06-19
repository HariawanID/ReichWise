import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <Form className="rounded p-6s p-sm-3 wd">
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

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
