import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import logo from "../../assets/earth.png";
import { useToken } from "../../utils/custom-hooks/useToken";
import "./login.css";

const Login = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 6 characters"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleMemberSignUp = async (values) => {
    try {
      const response = await axios.post("//localhost:8080/api/login", {
        email: values.email,
        password: values.password,
      });
      const { token } = response.data;
      setToken(token);
      setErrorMessage("");
      navigate(`/dashboard`);
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Member email or password is invalid");
      }
      if (error.response.status === 500) {
        setErrorMessage(
          "Something went wrong, please try again or try after some time"
        );
      }
    }
  };

  return (
    <div className="thc__loginForm-wrapper">
      <div className="thc__loginForm-container section__margin">
        <img src={logo} alt="logo" width={50} height={50} />
        <h3>Login</h3>
        {errorMessage && (
          <p
            style={{
              color: "#DC0000",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            {errorMessage}
          </p>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleMemberSignUp}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="email"
                as={TextField}
                label="Email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <div className="thc__loginBtnsLinks">
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
                <Link to="/forgot-password" style={{ color: "blue" }}>
                  Forgot you password?
                </Link>
                <Link to="/register">
                  Don't have an account?{" "}
                  <span style={{ color: "blue" }}>Sign Up</span>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
