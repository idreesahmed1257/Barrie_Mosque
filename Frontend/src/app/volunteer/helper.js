export const VolunteerFormFields = [
    { type: "text", name: "name", label: "Name", placeholder: "Enter Your Name", validationType: "text", required: true },

    { type: "text", name: "age", label: "Age", placeholder: "Enter Age", validationType: "number", required: true },

    {
        type: "select", name: "gender", label: "Gender",
        options: [{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }],
        validationType: "text", required: true
    },

    { type: "text", name: "email", label: "Email", placeholder: "Enter Your Email ", validationType: "email", required: true },

    { type: "text", name: "phone", label: "Phone Number", placeholder: "Enter Your Phone Number", validationType: "text", required: true },

    { type: "text", name: "homeAddress", label: "Home Address", placeholder: "Enter Home Address", validationType: "text", required: true },

    { type: "text", name: "message", label: "Message", placeholder: "Enter Your Query", validationType: "text", required: false },
];
