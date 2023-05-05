import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Cookies from "universal-cookie";

const Login = () => {
  const cookies = new Cookies();
  const handleSubmit = () => {
    cookies.set("token", "12345");
    window.location.reload();
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100vw"
      height="100vh"
      sx={{ backgroundColor: "#ffc90b" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        width="50%"
        alignItems="center"
        height="80%"
      >
        <img src="../../assets/LogoXl.png" width="100%" alt="logo big" />
        <Formik
          onSubmit={handleSubmit}
          validationSchema={validSchema}
          initialValues={initialValues}
        >
          {({
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                alignItems: "center",
                margin: "50px",
              }}
            >
              <TextField
                value={values.phone}
                name="phone"
                type="text"
                color="primary"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                sx={{
                  borderRadius: "5px",
                  backgroundColor: "white",
                  width: "50%",
                }}
                label="رقم الهاتف"
              />
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                name="password"
                variant="filled"
                type="password"
                sx={{
                  borderRadius: "5px",
                  backgroundColor: "white",
                  width: "50%",
                }}
                label="الباسوورد"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "30%",
                  backgroundColor: "white",
                  color: "black",
                  ":hover": { backgroundColor: "#c3c3c3" },
                }}
              >
                دخول
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  phone: "",
  password: "",
};

const validSchema = yup.object().shape({
  phone: yup
    .number()
    .required("رقم الهاتف مطلوب")
    .typeError("رقم الهاتف غير صالح"),
  password: yup.string().required("كلمه المرور مطلوبه"),
});

export default Login;
