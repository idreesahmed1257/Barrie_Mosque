import { yupResolver } from "@hookform/resolvers/yup";
import { string } from "yup";

export const YupBusinessSchema = {
    name: string().required(),
    ownerFullName: string().required("Owner full name is required"),
    email: string().email().required(),
    phone: string()
        .required("Phone number is required")
        .matches(
            /^(\+1\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/,
            "Phone number is not valid. It should match the Canadian phone number format."
        ),
    details: string().optional(),
    website: string().url("Website must be a valid URL").optional(),
    category: string().required("Category is required"),
    // Optional; when checkbox is checked we enforce selection in submit handler
    masjidConnection: string().oneOf(['Attendee', 'Sponsor', 'Volunteer']).optional(),
}

export const formBusinessSchema = (businessSchema) => {
    return {
        resolver: yupResolver(businessSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            name: '',
            ownerFullName: '',
            details: '',
            phone: '',
            website: '',
            category: '',
            masjidConnection: '',
        }
    }
}
