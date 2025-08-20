import { string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const YupContactSchema = {
    email: string().email().required(),
    name: string().required(),
    message: string().required()
}

export const formContactSchema = (contactSchema) => {
    return {
        resolver: yupResolver(contactSchema),
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            name: '',
            message: ''
        }
    }
}
