import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

import { main } from "../assets";
import { useGlobalContext } from "../context";

const Home = () => {
  const { user } = useGlobalContext();

  return (
    <>
      {user && <Navigate to="/dashboard" />}
      <Wrapper className="page">
        <div className="info">
          <div className="info_text">
            <h2>
              <span>JWT</span> Auth
            </h2>

            <p>
              I'm baby viral enamel pin chartreuse cliche retro af selfies
              kinfolk photo booth plaid jianbing actually squid 3 wolf moon
              lumbersexual. Hell of humblebrag gluten-free lo-fi man braid
              legging
            </p>

            <p>
              Cloud bread kale chips wayfarers deep v chicharrones leggings
              fingerstache actually blog cliche four dollar toast. Sriracha ugh
              kickstarter, next level la croix butcher lomo.
            </p>

            <div className="info_btns">
              <Link to="/login" className="btn">
                Login
              </Link>

              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
          </div>
          <div className="info_img">
            <img src={main} alt="job hunt" className="img main-img" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .info_text {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .info_img {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  .main-img {
    display: flex;
    width: 80%;
    height: 80%;
  }
  .info_btns {
    display: flex;
    flex-direction: row;
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  @media (max-width: 900px) {
    .info {
      flex-direction: column;
    }
    .info_img {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`;

export default Home;
