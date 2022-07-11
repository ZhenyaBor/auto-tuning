import { Formik, FormikHelpers } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const TopHeader = () => {
  const validationsSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Более 2х ")
      .typeError("Только буквы")
      .required("Поле обязательно"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validateOnBlur
        validationSchema={validationsSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name={"firstName"}
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <Button
              type={"submit"}
              variant="outlined"
              disabled={!isValid && !dirty}
            >
              Outlined
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
