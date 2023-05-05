import { Box, Button, TextField } from "@mui/material"
import { Formik } from "formik";
import * as yup from "yup";
const CreateAccount = () => {
    const formSubmit = () => {
        console.log("Here")
    }
    return (
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ backgroundColor: '#ffc90b' }} height="100vh" width="100%">
            <img src="../../assets/iconThink.png" width="472px" height="362px" style={{ margin: "50px" }} alt="Think Icon" />
            <Box width="100%" height="100%">
                <Formik initialValues={initialState} onSubmit={formSubmit} validationSchema={validationSchema}>
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: 'column',direction: "ltr", alignItems: 'center', width: '100%'}}>
                            <Box display="flex" justifyContent="space-evenly" m="50px 0" gap={15}>
                                <TextField variant="outlined" label="الرمز السري" value={values.serial} onBlur={handleBlur} onChange={handleChange} error={!!touched.serial && !!errors.serial} helperText={touched.serial && errors.serial} name="serial"/>
                                <TextField variant="outlined" label="رقم الهاتف" value={values.phone} onBlur={handleBlur} onChange={handleChange} error={!!touched.phone && !!errors.phone} helperText={touched.phone && errors.phone} name="phone" />
                                <TextField variant="outlined" label="الاسم" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange} error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} />
                            </Box>
                            <Box display="flex" justifyContent="space-evenly" gap={15}>
                                <TextField variant="outlined" label="رقم المركب" name="shipNumber" value={values.shipNumber} onBlur={handleBlur} onChange={handleChange} error={!!touched.shipNumber && !!errors.shipNumber} helperText={touched.shipNumber && errors.shipNumber} />
                                <TextField variant="outlined" label="نوع العمر" name="ageType" value={values.ageType} onBlur={handleBlur} onChange={handleChange} error={!!touched.ageType && !!errors.ageType} helperText={touched.ageType && errors.ageType} />
                                <TextField variant="outlined" label="العمر" name="age" value={values.age} onBlur={handleBlur} onChange={handleChange} error={!!touched.age && !!errors.age} helperText={touched.age && errors.age} />
                            </Box>
                            <Button type="submit" variant="outlined" sx={{width: "10%", m:10, fontSize: "25px", color: 'white', border: "2px solid blue", borderRadius: "15px", ":hover" : {color: "blue"}}}>انشاء الان</Button>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}


const initialState = {
    name: "",
    phone: "",
    serial: "",
    shipNumber: "",
    age: "",
    ageType: "",
}

const validationSchema = yup.object().shape({
    name: yup.string().required("مطلوب*"),
    phone: yup.string().required("مطلوب*"),
    serial: yup.string().required("مطلوب*"),
    shipNumber: yup.string().required("مطلوب*"),
    age: yup.string().required("مطلوب*"),
    ageType: yup.string().required("مطلوب*"),

})

export default CreateAccount;