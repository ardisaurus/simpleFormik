import React from "react";
import { useField, FieldAttributes } from "formik";
import { TextField, MenuItem } from "@material-ui/core";

type myOptionItems = { label: string; value: string };
type MySelectProps = {
  label: string;
  options: Array<myOptionItems>;
} & FieldAttributes<{}>;
const MySelect: React.FC<MySelectProps> = ({ label, options, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField {...field} select label={label} helperText={errorText}>
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default MySelect;
