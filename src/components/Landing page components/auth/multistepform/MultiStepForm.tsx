import React, { useState } from "react";
import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikValues,
} from "formik";
import FormNavigation from "./FormNavigation";
import { Step, StepLabel, Stepper } from "@mui/material";

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}
const MultiStepForm = ({ children, initialValues, onSubmit }: Props) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];

  const [snapShot, setSnapShot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values: FormikValues) => {
    setSnapShot(values);
    setStepNumber(stepNumber + 1);
  };
  const previous = (values: FormikValues) => {
    setSnapShot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <Stepper activeStep={stepNumber} alternativeLabel={true}>
            {steps.map((currentStep) => {
              const label = currentStep.props.stepName;
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {step}
          <FormNavigation
            isLastStep={isLastStep}
            hasPrevious={stepNumber > 0}
            onBackClick={() => previous(formik.values)}
          />
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;

export const FormStep = ({ stepName = "", children }: any) => children;
