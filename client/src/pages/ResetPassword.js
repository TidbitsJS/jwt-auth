import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { FormRow } from "../components";
import { url, useLocalState } from "../utils";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [password, setPassword] = useState("");

  const { alert, showAlert, loading, setLoading, success, setSuccess } =
    useLocalState();

  const handleChange = async (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!password) {
      showAlert({ text: "Please enter password" });
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(`${url}/api/v1/auth/reset-password`, {
        password,
        token: query.get("token"),
        email: query.get("email"),
      });

      console.log(data);

      setSuccess(true);
      showAlert({
        text: "Success, redirecting to login page shortly",
        type: "success",
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      showAlert({ text: error.response.data.msg });
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
          <h4>Reset Password</h4>

          <FormRow
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
          />

          <button type="submit" className="btn btn-block" disabled={loading}>
            {loading ? "Please Wait..." : "New Password"}
          </button>
        </form>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h4,
  p {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
  }
`;

export default ResetPassword;
