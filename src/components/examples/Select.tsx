import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import MySelect from "../inputs/MySelect";

// ============ Menu definitions
type myOptionItems = { label: string; value: string };
const juicesMenu: Array<myOptionItems> = [
  { label: "Apple", value: "apple" },
  { label: "Orange", value: "orange" },
  { label: "Melon", value: "melon" }
];

const Select: React.FC = () => {
  const [data, setData] = React.useState<any>({});
  return (
    <div>
      <Formik
        initialValues={{
          juice: null
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setData(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <MySelect name="juice" label="Juice" options={juicesMenu} />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
            {"<-- state -->"}
            <pre>{JSON.stringify(values, null, 2)}</pre>
            {"<----->"}
          </Form>
        )}
      </Formik>
      {"<-- submitted -->"}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {"<----->"}
    </div>
  );
};

export default Select;
