import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { useGlobalContext } from "../context";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  const query = useQuery();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isLoading } = useGlobalContext();

  const verifyToken = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/v1/auth/verify-token", {
        verificationToken: query.get("token"),
        email: query.get("email"),
      });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      verifyToken();
    }
  }, []);

  if (loading) {
    return (
      <Wrapper className="page">
        <h2>Loading...</h2>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper className="page">
        <h4>There was an error, please double check your verification link</h4>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="page">
      <h2>Account Confirmed</h2>
      <Link to="/login" className="btn">
        Please login
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Verify;
