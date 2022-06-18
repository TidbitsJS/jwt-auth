import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper className="page">
      <h2>Hello there, user</h2>
      <p>
        Your ID : <span>3456</span>
      </p>
      <p>
        Your Role : <span>Role</span>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p span {
    background: var(--primary-500);
    padding: 0.15rem 0.25rem;
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
  }
`;

export default Dashboard;
