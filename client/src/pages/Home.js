import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { main } from "../assets";

const Home = () => {
  return (
    <Wrapper className="page">
      <div className="info">
        <h2>
          <span>Auth</span> Workflow
        </h2>

        <p>
          I'm baby viral enamel pin chartreuse cliche retro af selfies kinfolk
          photo booth plaid jianbing actually squid 3 wolf moon lumbersexual.
          Hell of humblebrag gluten-free lo-fi man braid legging
        </p>

        <p>
          Cloud bread kale chips wayfarers deep v chicharrones leggings
          fingerstache actually blog cliche four dollar toast. Sriracha ugh
          kickstarter, next level la croix butcher lomo.
        </p>

        <Link to="/login" className="btn">
          Login
        </Link>

        <Link to="/register" className="btn">
          Register
        </Link>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export default Home;
