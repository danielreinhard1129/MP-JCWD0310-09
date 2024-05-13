import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    category: Yup.string().required('Category is required'),
    location: Yup.string().required('Location is required'),
    price: Yup.string().required('Location is required'),
    startDate: Yup.string().required('Start date is required'),
    endDate: Yup.string().required('End date is required'),
    description: Yup.string().required('Description is required'),
    thumbnail: Yup.array().min(1),
    content: Yup.string().required('Content is required'),

})