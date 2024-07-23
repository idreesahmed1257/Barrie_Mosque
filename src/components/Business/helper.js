import { string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const YupBusinessSchema = {
    name: string().required(),
    email: string().email().required(),
    phone: string()
        .required("Phone number is required")
        .matches(
            /^(\+1\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/,
            "Phone number is not valid. It should match the Canadian phone number format."
        ),
    details: string().optional(),
    website: string().url("Website must be a valid URL").optional(),
}

export const formBusinessSchema = (businessSchema) => {
    return {
        resolver: yupResolver(businessSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            name: '',
            details: '',
            phone: '',
            website: '',
        }
    }
}
