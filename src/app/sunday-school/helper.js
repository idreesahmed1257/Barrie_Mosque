import { string, number, boolean } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const YupSundaySchoolSchema = {
    parentName: string().required("Parent name is required"),
    parentPhone: string()
        .matches(
            /^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
            "Invalid Canadian phone number format"
        )
        .required("Parent phone number is required"),
    parentEmail: string().email("Invalid email format").required("Parent email is required"),
    contactNo: string()
        .required(),
    contactEmail: string().email("Invalid email format").required(),
    homeAddress: string().required("Home address is required"),
    noOfChildren: number()
        .typeError("Number of children must be a number")
        .min(1, "At least one child is required")
        .required("Number of children is required"),
};

export const formSundaySchoolSchema = (sundaySchoolSchema) => {
    return {
        resolver: yupResolver(sundaySchoolSchema),
        mode: "onSubmit",
        defaultValues: {
            parentName: "",
            parentPhone: "",
            parentEmail: "",
            contactNo: "",
            contactEmail: "",
            homeAddress: "",
            noOfChildren: "",
            childrenInfo: [
                {
                    studentName: "",
                    studentAge: "",
                    studentGender: "",
                    isChildSixYearOld: false,
                    isFirstTime: false,
                    allergies: "",
                    previousClass: ""
                }
            ],
        },
    };
};



export const studentAgeOptions = Array.from({ length: 13 }, (_, i) => ({ value: i + 6, label: i + 6 }));

export const noOfChildrenOptions = Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: i + 1 }));

export const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
];
