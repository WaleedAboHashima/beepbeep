import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const SendNotif = () => {
  const handleSubmit = () => {
    console.log("Done");
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="20px"
      flexDirection="column"
      sx={{ backgroundColor: "#ffc90b" }}
      height="100vh"
      width="100%"
    >
      <img
        src="../assets/iconWrite.png"
        width="715px"
        height="285px"
        alt="Logo Write"
      />
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialState}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 25,
                width: "50%",
              }}
            >
              <TextField
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                label="عنوان الاشعار"
                dir="ltr"
                placeholder="عنوان الاشعار"
              />
              <TextField
                name="message"
                error={!!touched.message && !!errors.message}
                helperText={touched.message && errors.message}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.message}
                multiline
                rows={10}
                label="محتوي الرساله"
                dir="ltr"
                placeholder="يمكن كتابه حتي 500 حرف"
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  fontSize: "25px",
                  color: "white",
                  border: "2px solid blue",
                  borderRadius: "15px",
                  ":hover": { color: "blue" },
                }}
              >
                ارسال
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialState = {
  title: "",
  message: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().required("مطلوب*"),
  message: yup.string().required("مطلوب*"),
});

export default SendNotif;
