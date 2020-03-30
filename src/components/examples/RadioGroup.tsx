import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import MyOptionGroup from "../inputs/MyOptionGroup";

// ============ Menu definitions
type myOptionItems = { label: string; value: string };
const cookiesMenu: Array<myOptionItems> = [
  { label: "Brownies", value: "brownies" },
  { label: "Peanut", value: "peanut" },
  { label: "Almond", value: "almond" }
];

const RadioGroup: React.FC = () => {
  const [data, setData] = React.useState<any>({});
  return (
    <div>
      <Formik
        initialValues={{
          cookie: null
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
              <MyOptionGroup
                name="cookie"
                label="Cookie"
                type="radio"
                options={cookiesMenu}
              />
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

export default RadioGroup;
