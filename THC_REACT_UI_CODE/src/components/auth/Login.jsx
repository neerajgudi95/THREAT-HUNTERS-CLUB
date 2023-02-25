import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Link as MUILink } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import "./login.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 6 characters")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigator = useNavigate();

  const handleMemberSignUp = (values) => {
    console.log(values);
  };

  return (
    <div className="thc__loginForm-wrapper">
      <div className="thc__loginForm-container section__margin">
        <h3>Login</h3>
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
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
              <div>
                <MUILink href="#" underline="always">
                  Forgot you password?
                </MUILink>
              </div>
              <Link to="/register">Don't have an account? Sign Up?</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
