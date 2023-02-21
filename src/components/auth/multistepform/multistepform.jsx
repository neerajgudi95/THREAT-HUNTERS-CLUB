import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Register from "./Register";

// import PersonalDetails from "./PersonalDetails";
// import AddressDetails from "./AddressDetails";
// import PaymentDetails from "./PaymentDetails";

const steps = ["Personal Details", "Education Details", "Payment"];

const getStepContent = (stepIndex, handleNext, handleBack) => {
  switch (stepIndex) {
    case 0:
      return <Register handleNext={handleNext} />;
    case 1:
      return <Register handleNext={handleNext} handleBack={handleBack} />;
    case 2:
      return <Register handleBack={handleBack} />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // By joining and agreeing to the terms and conditions,
  // members acknowledge this
  // policy and accept responsibility
  // for their actions while using the services provided.

  const handleSubmit = () => {
    console.log("form submitted");
    // API call for payment processing
  };

  return (
    <Box className="section__padding">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default MultiStepForm;
