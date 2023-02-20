import React from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleMemberSignUp = (e) => {
    e.preventDefault();
    navigate("/dashboard/1");
  };

  return (
    <div className="thc__registerForm-wrapper">
      <div className="thc__registerForm-container">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={() => handleMemberSignUp()}>
          <h3>Join Us</h3>
          <input type="text" placeholder="Firstname" autoComplete="off" />
          <input type="text" placeholder="Lastname" autoComplete="off" />
          <input type="text" placeholder="Email" autoComplete="off" />
          <input type="text" placeholder="Phone No." autoComplete="off" />
          <input type="password" placeholder="Password" autoComplete="off" />
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="off"
          />
          <input
            type="checkbox"
            name="acceptTermsCheck"
            id="acceptTermsCheck"
          />
          <label htmlFor="acceptTermsCheck">
            I, accept the policies of the club and will follow the code of
            conduct. Incase of any misconduct, the admins can take necessary
            action resulting in termination of my membership
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
