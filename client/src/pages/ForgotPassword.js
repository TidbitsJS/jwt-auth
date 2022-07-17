import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { FormRow } from "../components";
import { useLocalState } from "../utils";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const {
    alert,
    showAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    hideAlert,
  } = useLocalState();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    hideAlert();

    if (!email) {
      showAlert({ text: "Please provide email" });
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
      });

      showAlert({ text: data.msg, type: "success" });
      setSuccess(true);
    } catch (error) {
      showAlert({ text: "Something went wrong, please try again" });
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper className="page">
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}

      {!success && (
        <form
          className={loading ? "form form-loading" : "form"}
          onSubmit={handleSubmit}
        >
          <h4>Forgot Password</h4>

          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />

          <button type="submit" className="btn btn-block" disabled={loading}>
            {loading ? "Please Wait..." : "Get Reset Password Link"}
          </button>

          <p>
            Already have an account?
            <Link to="/login" className="login-link">
              Log In
            </Link>
          </p>
        </form>
      )}
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
