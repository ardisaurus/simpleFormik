import React from "react";
import { FormControl, FormLabel } from "@material-ui/core";
import MyCheckbox from "./MyCheckbox";
import MyRadio from "./MyRadio";

const MyOptionGroup = ({ name, label, type, options }: any) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    {type === "radio"
      ? options.map((item: any) => (
          <MyRadio
            name={name}
            type={type}
            value={item.value}
            label={item.label}
          ></MyRadio>
        ))
      : null}
    {type === "checkbox"
      ? options.map((item: any) => (
          <MyCheckbox
            name={name}
            type={type}
            value={item.value}
            label={item.label}
          ></MyCheckbox>
        ))
      : null}
  </FormControl>
);
export default MyOptionGroup;
