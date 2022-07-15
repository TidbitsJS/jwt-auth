import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import {
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  Error,
  Register,
  ResetPassword,
} from "./pages";
import { useGlobalContext } from "./context";

const App = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <section className="page page-center">
        <div className="loading" />
      </section>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
