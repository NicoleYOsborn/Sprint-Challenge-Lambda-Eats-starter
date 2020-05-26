import * as yup from 'yup'

const formSchema = yup.object().shape({
    custName: yup.string().min(2, 'The name must be at least two characters').required('Name is required'),
    size: yup.string().required('You must choose a pizza size'),
    special: yup.string(),
    toppings: yup.string()
})

export default formSchema;