import React from "react";
import { object, string, ref } from "yup";

import "./memberRegistration.css";
import InputField from "./InputField";
import MultiStepForm, { FormStep } from "./MultiStepForm";

const validationSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("First Name is required"),
  dateOfJoin: string().required("DOJ is required"),
  department: string().required("Department is required"),
  email: string().email().required("Email is required"),
  phoneNo: string().required("phoneNo is required"),
  password: string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
      "Password must be alphanumeric"
    )
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const MemberRegistration = () => {
  return (
    <div className="thc__registration-wrapper">
      <div className="section__margin thc__registration-container">
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
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          <FormStep
            stepName="Personal Details"
            onSubmit={() => console.log("Personal Details form")}
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
          </FormStep>
          <FormStep
            stepName="Credentials"
            onSubmit={() => console.log("Credentials form")}
            validationSchema={object({
              email: string().email().required("Email is required"),
              phoneNo: string().required("phoneNo is required"),
              password: string().required("Password is required"),
              confirmPassword: string().oneOf(
                [ref("password"), null],
                "Passwords must match"
              ),
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
          <FormStep
            stepName="Payment"
            onSubmit={() => console.log("Payment page")}
            validationSchema={object().shape({
              upiId: string()
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid UPI ID")
                .required("UPI ID is required"),
            })}
          >
            <InputField name="upiId" label="UPI ID" />
          </FormStep>
        </MultiStepForm>
      </div>
    </div>
  );
};

export default MemberRegistration;
