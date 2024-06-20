/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LoginInput from '../components/LoginInput';
import "./Apps.css"

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
              <h2>Login</h2>
              <LoginInput />
              <div className="signin">
                <span>
                  Don't have an account?
                  <Link to="/register">Register here</Link>
                  {' '}
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
