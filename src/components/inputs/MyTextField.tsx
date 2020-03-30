import React from "react";
import { FieldAttributes, useField } from "formik";
import { TextField } from "@material-ui/core";

type MyTextFieldProps = { label: string } & FieldAttributes<{}>;
const MyTextField: React.FC<MyTextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      label={label}
      type={props.type}
      helperText={errorText}
    />
  );
};

export default MyTextField;
