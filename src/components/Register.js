import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="container">
      <form className="form">
        <h1>Start Your Fitness Journey</h1>
        <input className="input" type="text" placeholder="Enter your name" />
        <input className="input" type="email" placeholder="Enter your email" />
        <input
          className="input"
          type="password"
          placeholder="Enter your password"
        />
        <input className="input" type="text" placeholder="Enter your age" />

        <button className="btn-register">Register</button>
      </form>
      <p>
        Already Have an Account?<Link to="/login">Login</Link>
      </p>
    </section>
  );
};

export default Register;
