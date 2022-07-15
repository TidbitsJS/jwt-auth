import React from "react";
import { Navigate } from "react-router-dom";

import { useGlobalContext } from "../context";

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
