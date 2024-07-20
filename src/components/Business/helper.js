import { string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const YupBusinessSchema = {
    businessName: string().required(),
    email: string().email().required(),
    phone: string()
        .required("Phone number is required")
        .matches(
            /^(\+1\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/,
            "Phone number is not valid. It should match the Canadian phone number format."
        ), description: string().required()
}

export const formBusinessSchema = (businessSchema) => {
    return {
        resolver: yupResolver(businessSchema),
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            businessName: '',
            description: '',
            phone: ''
        }
    }
}
