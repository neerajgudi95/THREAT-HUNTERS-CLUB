import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleMemberSignUp = (e) => {
    e.preventDefault();
    navigate("/dashboard/1");
  };

  return (
    <div className="thc__loginForm-wrapper">
      <div className="thc__loginForm-container">
        <form onSubmit={() => handleMemberSignUp()}>
          <h3>Login</h3>
          <input type="text" placeholder="username" autoComplete="off" />
          <input type="password" placeholder="password" autoComplete="off" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
