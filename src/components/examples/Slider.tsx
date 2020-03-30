import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import MySlider from "../inputs/MySlider";

const Slider: React.FC = () => {
  const [data, setData] = React.useState<any>({});
  return (
    <div>
      <Formik
        initialValues={{
          volume: 0
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
              <MySlider
                name="volume"
                label="Volume"
                valueLabelDisplay="auto"
                min={0}
                max={100}
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

export default Slider;
