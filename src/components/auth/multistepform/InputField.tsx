import React from "react";
import { TextField } from "@mui/material";
import { FieldConfig, useField } from "formik";

interface Props extends FieldConfig {
  label: string;
}

const InputField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <TextField
        fullWidth={true}
        label={label}
        {...field}
        {...props}
        variant="outlined"
        color="primary"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </div>
  );
};

export default InputField;
