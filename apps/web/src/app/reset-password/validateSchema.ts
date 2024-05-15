import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    password: Yup.string().required("Please enter password"),
    confirmPassword: Yup.string()
    .required("Please confirm password")
    .oneOf([Yup.ref('password')], 'Your passwords do not match'),
});