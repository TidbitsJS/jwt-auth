import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FormRow } from "../components";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Wrapper className="page">
      <div className="alert">Alert</div>

      <form className="form">
        <h4>Forgot Password</h4>

        <FormRow
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          Get Reset Password Link
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

const Wrapper = styled.main`
  h4,
  p {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
  }
  .login-link {
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
  }
`;

export default ForgotPassword;
