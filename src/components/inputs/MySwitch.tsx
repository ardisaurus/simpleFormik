import React from "react";
import { FieldAttributes, useField } from "formik";
import { FormControlLabel, Switch } from "@material-ui/core";

type MySwitchProps = { label: string } & FieldAttributes<{}>;
const MySwitch: React.FC<MySwitchProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Switch />} label={label} />;
};

export default MySwitch;
