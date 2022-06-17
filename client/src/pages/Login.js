import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FormRow } from "../components";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper className="page">
      <div className={`alert`}>Alert text</div>

      <form className="form form-loading">
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
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>

        <p>
          Forgot your password?
          <Link to="/forgot-password" className="reset-link">
            Reset Password
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .alert {
    margin-top: 3rem;
  }
  h4 {
    text-align: center;
  }
  p {
    margin: 0;
    text-align: center;
  }
  .btn {
    margin-bottom: 1.5rem;
  }
  .register-link,
  .reset-link {
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
  }
  .reset-link {
    margin-top: 0.25rem;
  }
  .btn:disabled {
    cursor: not-allowed;
  }
`;

export default Login;
