import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import MySwitch from "../inputs/MySwitch";

const Switch: React.FC = () => {
  const [data, setData] = React.useState<any>({});
  return (
    <div>
      <Formik
        initialValues={{
          active: false
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
              <MySwitch name="active" type="checkbox" label="Active" />
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

export default Switch;
