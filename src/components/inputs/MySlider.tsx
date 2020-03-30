import React from "react";
import { useField } from "formik";
import { Typography, Slider } from "@material-ui/core";

const MySlider = ({ label, ...props }: any) => {
  // eslint-disable-next-line
  const [field, meta, helpers] = useField(props);

  return (
    <React.Fragment>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        {...field}
        {...props}
        onBlur={(e: any) => helpers.setTouched(e)}
        onChange={(e: any, v: any) => helpers.setValue(v)}
      />
    </React.Fragment>
  );
};

export default MySlider;
