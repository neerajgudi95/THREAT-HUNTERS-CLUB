import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/earth.png";
import * as Yup from "yup";
import axios from "axios";
import "./forgotPassword.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const initialValues = {
  email: "",
};

const ForgotPassword = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const handleForgotPassword = async (values) => {
    try {
      await axios.put(`/api/forgot-password/${values.email}`);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="thc__forgotPassword-wrapper section__padding">
      {success ? (
        <div className="thc__forgotPassword-container">
          <h1>Success</h1>
          <p>
            If you are registered with entered email id, you should receive a
            password reset link to the same.
          </p>
        </div>
      ) : (
        <div className="thc__forgotPassword-container">
          <div>
            <img src={logo} alt="logo" width={50} height={50} />
            <h2>Forgot Password</h2>
            <p>Enter your email and we'll send you a reset link</p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleForgotPassword}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  variant="standard"
                  fullWidth
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                  Send Reset Link
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
