import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { LoginHandler } from '../../apis/Auth/Login';
import { useEffect, useState } from "react";
import jwt from "jwt-decode"

const Login = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const state = useSelector(state => state.Login)
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  ///Functions

  const handleState = () => {
    if (state.status) {
      switch (state.status) {
        case 200:
          const decoded = jwt(state.data.token);

          cookies.set('_auth_token', state.data.token, {expires: new Date (decoded.exp * 1000)});
          cookies.set('_auth_verify_token', `#%!TkzsOkcaKenasdN${state.data.token}`, {expires: new Date (decoded.exp * 1000)});
          window.location.reload();
          break;  
        case 403:
          console.log(state.error);
          break;
        case 404: 
          console.log(state.error)
        default:
          break;
      }
    }
  }

  const handleLogin = () => {
    dispatch(LoginHandler({ phone: phone, password: password }));
  };

  useEffect(() => {
    handleState();
}, [state.status])

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
          onSubmit={handleLogin}
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
                gap: "40px",
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
                onChangeCapture={(e) => setPhone(e.target.value)}
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
                onChangeCapture={(e) => setPassword(e.target.value)}
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
              <Typography color="error" fontSize={20} m={0}>{state.error ? state.status === 403 ? "كلمه المرور غير صحيحه" : state.status === 404 ? "لا يوجد مستخدم بهذا الرقم" : "" : null}</Typography>
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
                {state.loading ? <CircularProgress size={24} color="primary" /> : "تسجيل الدخول"}
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
  password: yup.string().min(6,  "كلمه المرور لا تقل عن 6 احرف").required("كلمه المرور مطلوبه"),
});

export default Login;
