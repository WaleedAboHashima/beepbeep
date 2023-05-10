import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Form, Formik } from "formik";
import * as yup from "yup";
const CreateAccount = () => {
  const formSubmit = () => {
    console.log("Here");
  };
  return (
    <Box height="100%" width="100%" display="flex" flexDirection="column">
      <Box
        sx={{ backgroundColor: "#ffc90b " }}
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box>
          <Typography variant="h3">معلومات تسجيل الدخول</Typography>
        </Box>
        <Box width="70%" height="75%" sx={{ backgroundColor: "white" }}>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={() => console.log("Done")}
          >
            {({
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <Form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#ffc90b",
                  height: "100%",
                  gap: 20,
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <Box display="flex" width="100%" gap={5}>
                  <FormControl
                    sx={{
                      width: "30%",
                      direction: "rtl",
                    }}
                  >
                    <InputLabel>المحافظه</InputLabel>
                    <Select
                      sx={{ direction: "ltr" }}
                      name="gove"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="المحافظه"
                      value={values.gove}
                      error={!!errors.gove && !!touched.gove}
                      MenuProps={{
                        PaperProps: {
                          style: { maxHeight: 400, overflowY: "scroll" },
                        },
                      }}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value={10}>أربيل</MenuItem>
                      <MenuItem value={20}>الانبار</MenuItem>
                      <MenuItem value={30}>بابل</MenuItem>
                      <MenuItem value={40}>بغداد</MenuItem>
                      <MenuItem value={50}>البصره</MenuItem>
                      <MenuItem value={60}>حلبجة</MenuItem>
                      <MenuItem value={70}>دهوك</MenuItem>
                      <MenuItem value={80}>القادسيه</MenuItem>
                      <MenuItem value={90}>ديالي</MenuItem>
                      <MenuItem value={100}>ذي قار</MenuItem>
                      <MenuItem value={110}>السليمانيه</MenuItem>
                      <MenuItem value={120}>صلاح الدين</MenuItem>
                      <MenuItem value={130}>كركوك</MenuItem>
                      <MenuItem value={140}>كربلاء</MenuItem>
                      <MenuItem value={150}>المثني</MenuItem>
                      <MenuItem value={160}>ميسان</MenuItem>
                      <MenuItem value={170}>النجف</MenuItem>
                      <MenuItem value={180}>نينوي</MenuItem>
                      <MenuItem value={190}>واسط</MenuItem>
                    </Select>
                    <FormHelperText sx={{ textAlign: "center", color: "red" }}>
                      {errors.gove && touched.gove ? errors.gove : ""}
                    </FormHelperText>
                  </FormControl>
                  <TextField
                    name="phone"
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    sx={{ width: "30%" }}
                    dir="ltr"
                    placeholder="رقم الهاتف"
                    FormHelperTextProps={{ style: { textAlign: "center" } }}
                  />
                  <TextField
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ width: "40%" }}
                    FormHelperTextProps={{ style: { textAlign: "center" } }}
                    placeholder="الايميل"
                  />
                </Box>
                <Box display="flex" gap="5%">
                  <TextField
                    sx={{ width: "50%" }}
                    placeholder="الباسوورد"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    FormHelperTextProps={{ style: { textAlign: "center" } }}
                  />
                  <TextField
                    FormHelperTextProps={{ style: { textAlign: "center" } }}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    error={
                      !!touched.confirmPassword && !!errors.confirmPassword
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{ width: "50%" }}
                    placeholder=" تأكيد الباسوورد"
                  />
                </Box>
                <FormControl>
                  <InputLabel>النوع</InputLabel>
                  <Select
                    label="النوع"
                    sx={{ direction: "ltr" }}
                    name="role"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.role}
                    error={!!errors.role && !!touched.role}
                    fullWidth
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={10}>كابتن توصيل</MenuItem>
                    <MenuItem value={20}>مطعم او متجر</MenuItem>
                    <MenuItem value={30}>مسؤول</MenuItem>
                  </Select>
                  <FormHelperText>
                    {errors.role && touched.role ? errors.role : ""}
                  </FormHelperText>
                </FormControl>
                <Box height="100%">
                  <Typography textAlign="center" variant="h3">
                    {values.role === 10
                      ? "المعلومات المسؤول والوكالة"
                      : values.role === 20
                      ? "معلومات المحل"
                      : values.role === 30
                      ? "المعلومات الشخصية"
                      : ""}
                  </Typography>
                  {values.role === 10 ? (
                    <>
                      <Box
                        display="flex"
                        width="100%"
                        justifyContent="space-between"
                        sx={{ direction: "rtl", textAlign: "right" }}
                      >
                        <TextField
                          name="captainName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.captainName}
                          error={!!touched.captainName && !!errors.captainName}
                          helperText={touched.captainName && errors.captainName}
                          sx={{ width: "40%" }}
                          FormHelperTextProps={{
                            style: { textAlign: "center" },
                          }}
                          placeholder="اسم الكابتن الثلاثي"
                        />
                        <TextField
                          name="captainPhone"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.captainPhone}
                          error={
                            !!touched.captainPhone && !!errors.captainPhone
                          }
                          helperText={
                            touched.captainPhone && errors.captainPhone
                          }
                          sx={{ width: "40%" }}
                          FormHelperTextProps={{
                            style: { textAlign: "center" },
                          }}
                          placeholder="رقم الهاتف"
                        />
                      </Box>
                      <Box
                        display="flex"
                        width="100%"
                        justifyContent="space-between"
                        sx={{ direction: "rtl", textAlign: "right" }}
                      >
                        <TextField
                          name="captainAddress"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.captainAddress}
                          error={!!touched.captainAddress && !!errors.captainAddress}
                          helperText={touched.captainAddress && errors.captainAddress}
                          sx={{ width: "40%" }}
                          FormHelperTextProps={{
                            style: { textAlign: "center" },
                          }}
                          placeholder="عنوان السكن الحالي"
                        />
                        <TextField
                          name="captainAddressNear"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.captainAddressNear}
                          error={
                            !!touched.captainAddressNear && !!errors.captainAddressNear
                          }
                          helperText={
                            touched.captainAddressNear && errors.captainAddressNear
                          }
                          sx={{ width: "40%" }}
                          FormHelperTextProps={{
                            style: { textAlign: "center" },
                          }}
                          placeholder="اقرب نقطة دالة"
                        />
                      </Box>
                      <Box display="flex" justifyContent="space-between" gap={1}>
                        <TextField
                          name="jobType"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.jobType}
                          error={
                            !!touched.jobType && !!errors.jobType
                          }
                          helperText={
                            touched.jobType && errors.jobType
                          }
                          sx={{ width: "25%" }}
                          FormHelperTextProps={{
                            style: { textAlign: "center" },
                          }}
                          placeholder="نوع الهويه"
                        />
                        <TextField
                          FormHelperTextProps={{
                            style: { textAlign: "center" },
                          }}
                          name="jobNumber"
                          value={values.jobNumber}
                          error={
                            !!touched.jobNumber &&
                            !!errors.jobNumber
                          }
                          helperText={
                            touched.jobNumber && errors.jobNumber
                          }
                          onBlur={handleBlur}
                          onChange={handleChange}
                          sx={{ width: "25%" }}
                          placeholder="رقم الهوية"
                        />
                        <TextField
                          FormHelperTextProps={{
                            style: { textAlign: "center" },
                          }}
                          name="agencyType"
                          value={values.agencyType}
                          error={
                            !!touched.agencyType &&
                            !!errors.agencyType
                          }
                          helperText={
                            touched.agencyType && errors.agencyType
                          }
                          onBlur={handleBlur}
                          onChange={handleChange}
                          sx={{ width: "25%" }}
                          placeholder="نوع الوكالة"
                        />
                        <TextField
                          FormHelperTextProps={{
                            style: { textAlign: "center" },
                          }}
                          name="agencyLimit"
                          value={values.agencyLimit}
                          error={
                            !!touched.agencyLimit &&
                            !!errors.agencyLimit
                          }
                          helperText={
                            touched.agencyLimit && errors.agencyLimit
                          }
                          onBlur={handleBlur}
                          onChange={handleChange}
                          sx={{ width: "25%" }}
                          placeholder="مدة الوكالة"
                        />
                      </Box>
                      <Box display="flex" width="100%" justifyContent="space-between">
                        <Box sx={{backgroundColor: 'red' , width: "100%"}}></Box>
                        <Box sx={{backgroundColor: 'blue' , width: "100%"}}></Box>
                      </Box>
                    </>
                  ) : values.role === 20 ? (
                    ""
                  ) : (
                    ""
                  )}
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

const initialState = {
  captainName: "",
  captainPhone: "",
  captainAddress: "",
  captainAddressNear: "",
  jobType: "",
  jobNumber: "",
  agencyType: "",
  agencyLimit: "",
  gove: "",
  phone: "",
  password: "",
  confirmPassword: "",
  email: "",
  role: "",
};

const validationSchema = yup.object().shape({
  gove: yup.string().required("*مطلوب"),
  phone: yup.string().required("مطلوب*"),
  password: yup.string().required("مطلوب*"),
  confirmPassword: yup.string().required("مطلوب*"),
  email: yup.string().required("مطلوب*"),
  role: yup.string().required("مطلوب*"),
  //Captain
  captainName: yup.string().required("*مطلوب"),
  captainPhone: yup.string().required("*مطلوب"),
  captainAddress: yup.string().required("*مطلوب"),
  captainAddressNear: yup.string().required("*مطلوب"),
  jobType: yup.string().required("*مطلوب"),
  jobNumber: yup.string().required("*مطلوب"),
  agencyType: yup.string().required("*مطلوب"),
  agencyLimit: yup.string().required("*مطلوب"),
});

export default CreateAccount;
