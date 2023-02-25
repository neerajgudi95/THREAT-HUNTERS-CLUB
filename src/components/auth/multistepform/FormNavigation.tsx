import React from "react";
import { Button } from "@mui/material";
import { FormikValues } from "formik";

interface Props {
  hasPrevious?: boolean;
  isLastStep?: boolean;
  onBackClick: (values: FormikValues) => void;
}
const FormNavigation = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 50,
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="outlined"
        // color="danger"
        type="button"
        disabled={!props.hasPrevious}
        color="warning"
        onClick={props.onBackClick}
      >
        Back
      </Button>
      <Button
        variant="outlined"
        type="submit"
        color={props.isLastStep ? "success" : "info"}
      >
        {props.isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation;
