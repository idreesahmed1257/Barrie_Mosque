import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationRules = {
    text: yup.string().required("This field is required"),
    email: yup.string().email("Invalid email format").required("This field is required"),
    phone: yup.string()
        .matches(/^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/, "Invalid Canadian phone number format")
        .required("This field is required"),
    number: yup.number().typeError("Must be a number").min(1, "Must be at least 1").required("This field is required"),
    boolean: yup.boolean().oneOf([true], "This field is required"),
    date: yup.date()
        .typeError("Invalid date format")
        .max(new Date(), "Date cannot be in the future")
        .required("This field is required")
};

export const generateValidationSchema = (fields) => {
    let schema = {};
    fields.forEach(field => {
        if (field.validationType) {
            schema[field.name] = validationRules[field.validationType];
        }
    });
    return yup.object().shape(schema);
};

export const formDynamicSchema = (fields) => {
    return {
        resolver: yupResolver(generateValidationSchema(fields)),
        mode: "onSubmit",
        defaultValues: fields.reduce((acc, field) => {
            acc[field.name] = field.type === "checkbox" ? false : "";
            return acc;
        }, {})
    };
};