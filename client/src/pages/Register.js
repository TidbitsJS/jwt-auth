import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormRow } from "../components";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper className="page">
      <div className="alert">Alert</div>

      <form className="form">
        <FormRow
          type="name"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/login" className="login-link">
            Log In
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .alert {
    margin-top: 3rem;
    margin-bottom: -1.5rem;
  }
  h4 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .login-link {
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
  }
  .btn:disabled {
    cursor: not-allowed;
  }
`;

export default Register;
