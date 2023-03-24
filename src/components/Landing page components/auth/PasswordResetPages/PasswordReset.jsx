import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import PasswordResetFailure from "./PasswordResetFailure";
import PasswordResetSuccess from "./PasswordResetSuccess";
import "./passwordReset.css";

const PasswordReset = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const { passwordResetCode } = useParams();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Your password must be of atleast 8 letters."),
    confirmPassword: Yup.string()
      .required("Confirm password required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handlePasswordReset = async (values) => {
    try {
      await axios.put(
        `${process.env.ENDPOINT}/api/members/${passwordResetCode}/reset-password`,
        { newPassword: values.password }
      );
      setIsSuccess(true);
    } catch (error) {
      setIsFailure(true);
    }
  };

  if (isFailure) return <PasswordResetFailure />;
  if (isSuccess) return <PasswordResetSuccess />;

  return (
    <div className="thc__passwordreset-wrapper section__padding">
      <div className="thc__passwordreset-container">
        <div className="thc__passwordreset-header">
          <h2>Password Reset</h2>
          <p>Please enter a new password</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlePasswordReset}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="password"
                as={TextField}
                type="password"
                label="Password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Field
                name="confirmPassword"
                as={TextField}
                label="Confirm Password"
                type="password"
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Reset Password
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PasswordReset;
