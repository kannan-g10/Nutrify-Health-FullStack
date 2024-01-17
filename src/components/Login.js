import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="container">
      <form className="form">
        <h1>Welcome back!</h1>
        <input className="input" type="email" placeholder="Enter your email" />
        <input
          className="input"
          type="password"
          placeholder="Enter your password"
        />

        <button className="btn-login">Login</button>
      </form>
      <p>
        Not Having account?<Link to="/register">Register</Link>
      </p>
    </section>
  );
};

export default Login;
