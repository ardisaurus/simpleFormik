import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import Checkbox from "./components/examples/Checkbox";
import CheckboxGroup from "./components/examples/Switch";
import Radio from "./components/examples/Radio";
import RadioGroup from "./components/examples/RadioGroup";
import Select from "./components/examples/Select";
import Slider from "./components/examples/Slider";
import Switch from "./components/examples/Switch";
import MyTextfield from "./components/examples/Textfield";
import MyTextfieldValidation from "./components/examples/TextfieldValidation";

const myInputTypes = [
  {
    value: "textfield",
    label: "Textfield"
  },
  {
    value: "textfieldValidation",
    label: "Textfield Validation"
  },
  {
    value: "checkbox",
    label: "Checkbox"
  },
  {
    value: "checkboxGroup",
    label: "Checkbox Group"
  },
  {
    value: "radio",
    label: "Radio"
  },
  {
    value: "radioGroup",
    label: "Radio Group"
  },
  {
    value: "select",
    label: "Select"
  },
  {
    value: "slider",
    label: "Slider"
  },
  {
    value: "switch",
    label: "Switch"
  }
];

const App: React.FC = () => {
  const [inputType, setInputType] = useState<string>("textfield");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputType(event.target.value);
  };
  return (
    <div style={{ padding: "1em" }}>
      <TextField
        id="outlined-select-inputType"
        select
        label="Input Type"
        value={inputType}
        onChange={handleChange}
        variant="outlined"
      >
        {myInputTypes.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {inputType === "textfield" ? <MyTextfield /> : null}
      {inputType === "textfieldValidation" ? <MyTextfieldValidation /> : null}
      {inputType === "checkbox" ? <Checkbox /> : null}
      {inputType === "checkboxGroup" ? <CheckboxGroup /> : null}
      {inputType === "radio" ? <Radio /> : null}
      {inputType === "radioGroup" ? <RadioGroup /> : null}
      {inputType === "select" ? <Select /> : null}
      {inputType === "slider" ? <Slider /> : null}
      {inputType === "switch" ? <Switch /> : null}
    </div>
  );
};

export default App;
