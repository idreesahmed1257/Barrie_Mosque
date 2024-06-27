import { string } from "yup";

export const YupContactSchema = {
    email: string().email().required(),
    name: string().required(),
    message: ''
}

export const formContactSchema = (contactSchema) => {
    return {
        resolver: yupResolver(contactSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            name: '',
            message: ''
        }
    }
}
