import React, { useState } from "react";
import { object, string, ref } from "yup";
import axios from "axios";
import "./memberRegistration.css";
import InputField from "./InputField";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import { useToken } from "../../../../utils/custom-hooks/useToken";
import logo from "../../../../assets/earth.png";
import qr_code from "../../../../assets/payment_qr.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

const MemberRegistration = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validationSchema = object({
    firstName: string()
      .required("First Name is required")
      .min(4, "First name should have atleat 4 letters")
      .max(50, "First name is too Long!"),
    lastName: string()
      .required("Last Name is required")
      .min(2, "Last name should have atleat 2 letters")
      .max(50, "Last name too Long!"),
    profession: string().required("Profession is required"),
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
    const { firstName, lastName, email, phoneNo, profession, password } =
      values;
    // const salt = process.env.SALT;
    // const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const response = await axios.post(`${process.env.ENDPOINT}/api/signup`, {
        email: email,
        password: password,
        info: { firstName, lastName, phoneNo, profession },
      });
      const { token } = response.data;
      setToken(token);
      setErrorMessage("");
      navigate(`/email-verify`);
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage(
          "This email id is already registered with us. Please either login with the same email id or register with new one"
        );
      }
    }
  };

  return (
    <div className="thc__registration-wrapper">
      <div className="section__margin thc__registration-container">
        <img src={logo} alt="logo" width={50} height={50} />
        <h3>Join Us</h3>
        {errorMessage && (
          <p
            style={{
              color: "#DC0000",
              fontSize: "14px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {errorMessage}
          </p>
        )}
        <MultiStepForm
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            profession: "",
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
              firstName: string()
                .required("First Name is required")
                .min(4, "First name should have atleat 4 letters")
                .max(50, "First name is too Long!"),
              lastName: string()
                .required("First Name is required")
                .min(2, "Last name should have atleat 2 letters")
                .max(50, "Last name too Long!"),
              profession: string().required("Profession is required"),
            })}
          >
            <InputField name="firstName" label="First Name" />
            <InputField name="lastName" label="Last Name" />
            <InputField name="profession" label="Profession" />
          </FormStep>
          <FormStep
            stepName="Credentials"
            onSubmit={() => {}}
            validationSchema={object({
              email: string().email().required("Email is required"),
              phoneNo: string()
                .required("phoneNo is required")
                .matches(
                  /^([6-9]{1})([\d]{9})$/g,
                  "Please enter a valid phone number"
                ),
              password: string()
                .required("Password is required")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/,
                  "Must Contain 10 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
              confirmPassword: string()
                .oneOf([ref("password")], "Passwords must match")
                .required(),
            })}
          >
            <InputField name="email" label="Email" />
            <InputField name="phoneNo" label="Phone" />
            <InputField name="password" label="Password" type="password" />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </FormStep>
          {
            <FormStep stepName="Payment">
              <div className="payment-qr">
                <img src={qr_code} alt="payment qr" />
              </div>
              <div className="payment-info">
                <p>
                  Kindly share your email and transaction id to below whatsapp
                  account on successfull payment
                </p>
                <a href="https://wa.me/+919449030939" rel="noopener noreferrer">
                  <IoLogoWhatsapp
                    color="#128C7E"
                    size="2em"
                    style={{ margin: "10px 0" }}
                  />
                </a>
                <p>We'll verify your payment within 24 hours</p>
              </div>
            </FormStep>
          }
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
