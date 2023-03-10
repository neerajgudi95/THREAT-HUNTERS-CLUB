import React, { useState } from "react";
import { object, string, ref } from "yup";
import axios from "axios";
import "./memberRegistration.css";
import InputField from "./InputField";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import { useToken } from "../../../utils/custom-hooks/useToken";
import logo from "../../../assets/earth.png";
import { Link, useNavigate } from "react-router-dom";

const MemberRegistration = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validationSchema = object({
    firstName: string()
      .required("First Name is required")
      .min(2, "First name should have atleat 2 letters")
      .max(50, "First name is too Long!"),
    lastName: string()
      .required("Last Name is required")
      .min(2, "Last name should have atleat 2 letters")
      .max(50, "Last name too Long!"),
    dateOfJoin: string().required("DOJ is required"),
    department: string().required("Department is required"),
    email: string().email().required("Email is required"),
    phoneNo: string()
      .required("phoneNo is required")
      .matches(
        /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
        "Invalid phone number"
      ),
    password: string()
      .matches(
        /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
        "Password must be alphanumeric"
      )
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: string()
      .oneOf([ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleUserSignUp = async (values) => {
    const {
      firstName,
      lastName,
      email,
      phoneNo,
      yearOfJoin,
      department,
      password,
    } = values;
    try {
      const response = await axios.post("//localhost:8080/api/signup", {
        email: email,
        password: password,
        info: { firstName, lastName, phoneNo, yearOfJoin, department },
      });
      const { token } = response.data;
      console.log(token);
      setToken(token);
      setErrorMessage("");
      navigate(`/email-verify`);
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage(
          "This email is already registered with us. Please login with this email"
        );
      }
    }
  };

  return (
    <div className="thc__registration-wrapper">
      <div className="section__margin thc__registration-container">
        <img src={logo} alt="logo" width={50} height={50} />
        <h3>Join Us</h3>
        <MultiStepForm
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            yearOfJoin: "",
            department: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleUserSignUp}
          validationSchema={validationSchema}
        >
          <FormStep
            stepName="Personal Details"
            onSubmit={() => {}}
            validationSchema={object({
              firstName: string().required("First Name is required"),
              lastName: string().required("First Name is required"),
              yearOfJoin: string().required("DOJ is required"),
              department: string().required("Department is required"),
            })}
          >
            <InputField name="firstName" label="First Name" />
            <InputField name="lastName" label="Last Name" />
            <InputField name="yearOfJoin" label="Year of joining" />
            <InputField name="department" label="Department" />
            <script
              src="https://payments.open.money/buttons"
              data-open-button-id="bt_BV4jtk8FINahtVY"
            >
              click here
            </script>
          </FormStep>
          <FormStep
            stepName="Credentials"
            onSubmit={() => {}}
            validationSchema={object({
              email: string().email().required("Email is required"),
              phoneNo: string().required("phoneNo is required"),
              password: string().required("Password is required"),
              confirmPassword: string()
                .oneOf([ref("password")], "Passwords must match")
                .required(),
            })}
          >
            {errorMessage && (
              <p
                style={{
                  color: "#DC0000",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {errorMessage}
              </p>
            )}
            <InputField name="email" label="Email" />
            <InputField name="phoneNo" label="Phone" />
            <InputField name="password" label="Password" type="password" />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </FormStep>
          {/* <FormStep
            stepName="Payment"
            onSubmit={() => {}}
            validationSchema={object().shape({
              upiId: string()
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid UPI ID")
                .required("UPI ID is required"),
            })}
          >
            <InputField name="upiId" label="UPI ID" />
          </FormStep> */}
        </MultiStepForm>
        <p
          style={{
            fontWeight: 200,
            fontSize: "15px",
          }}
        >
          Already have an account?
        </p>
        <Link
          to="/login"
          style={{
            fontWeight: 300,
            color: "blue",
            fontSize: "15px",
          }}
        >
          Please login
        </Link>
      </div>
    </div>
  );
};

export default MemberRegistration;
