import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import RegisterInput from '../components/RegisterInput';

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 right-image">
            <div className="text" />
          </div>
          <div className="col-md-6 side-form">
            <Container>
              <h2>Register</h2>
              <RegisterInput />
              <div className="signin">
                <span>
                  have an account?
                  <Link to="/">Login</Link>
                </span>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
