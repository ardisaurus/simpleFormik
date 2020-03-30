import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import MyRadio from "../inputs/MyRadio";

const Radio: React.FC = () => {
  const [data, setData] = React.useState<any>({});
  return (
    <div>
      <Formik
        initialValues={{
          color: null
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
              <MyRadio name="color" type="radio" value="red" label="Red" />
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

export default Radio;
