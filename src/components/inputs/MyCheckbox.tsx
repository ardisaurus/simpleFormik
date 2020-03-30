import React from "react";
import { FieldAttributes, useField } from "formik";
import { FormControlLabel, Checkbox } from "@material-ui/core";

type MyCheckBoxProps = { label: string } & FieldAttributes<{}>;
const MyCheckBox: React.FC<MyCheckBoxProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

export default MyCheckBox;
