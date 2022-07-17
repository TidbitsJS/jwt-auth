import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { FormRow } from "../components";
import { useLocalState } from "../utils";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {
    alert,
    hideAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    showAlert,
  } = useLocalState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);

    const { name, email, password } = values;
    const registerNewUser = { name, email, password };

    try {
      const { data } = await axios.post(
        `/api/v1/auth/register`,
        registerNewUser
      );

      setSuccess(true);
      showAlert({ text: data.msg, type: "success" });
    } catch (error) {
      const { msg } = error.response.data;
      showAlert({ text: msg || "There was an error" });
    } finally {
      setValues({ name: "", email: "", password: "" });
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
          onSubmit={onSubmit}
        >
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

          <button type="submit" className="btn btn-block" disabled={loading}>
            {loading ? "Loading..." : "Register"}
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
