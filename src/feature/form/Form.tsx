/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Formik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useValidation } from "./hooks/useValidation";
import { useSetting } from "./hooks/useSetting";


export const Form = () => {
  const { validationsSchema } = useValidation()
   const {onSubmit  } = useSetting()

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          password: "",
          email: "",
          confirmPassword: "",
        }}
        validateOnBlur
        validationSchema={validationsSchema}
        onSubmit={onSubmit}
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
          <form
            onSubmit={handleSubmit}
            css={css`
              box-sizing: border-box;
              align-items: center;
              justify-content: center;
              width: 500px;
              margin: 30px auto;
              display: flex;
              flex-direction: column;
              border: solid 1px;
              padding: 20px 10px;
            `}
          >
            <label id="firstName">Логин</label>
            <TextField
              sx={{ m: 1, width: "100%" }}
              name={"firstName"}
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="firstName"
              label="Login"
              variant="outlined"
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <label id="email">Емейл</label>
            <TextField
              sx={{ m: 1, width: "100%" }}
              name={"email"}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              label="email"
              variant="outlined"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <label id="password">Пароль</label>
            <TextField
              sx={{ m: 1, width: "100%" }}
              name={"password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              label="Password"
              variant="outlined"
              type={"password"}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <label id="password">Повториите пароль</label>
            <TextField
              sx={{ m: 1, width: "100%" }}
              name={"confirmPassword"}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              type={"password"}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />

            <Button
              sx={{ m: 0.1, width: "70%" }}
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
