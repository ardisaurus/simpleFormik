import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import MyTextField from "../inputs/MyTextField";

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required()
    .min(3)
});

const TextField: React.FC = () => {
  const [data, setData] = React.useState<any>({});
  return (
    <div>
      <Formik
        initialValues={{
          fullName: null
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setData(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <MyTextField
                label="Full Name"
                name="fullName"
                type="text"
              ></MyTextField>
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

export default TextField;
