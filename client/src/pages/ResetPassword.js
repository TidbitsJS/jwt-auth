import React, { useState } from "react";
import styled from "styled-components";

import { FormRow } from "../components";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const handleChange = async (e) => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper className="page">
      <div className="alert">Alert</div>

      <form className="form">
        <h4>Reset Password</h4>

        <FormRow
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          New Password
        </button>
      </form>
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
