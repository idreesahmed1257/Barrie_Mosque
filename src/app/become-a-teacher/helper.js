export const teacherFormFields = [
    { type: "text", name: "fullName", label: "Full Name", placeholder: "Enter Full Name", validationType: "text", required: true },

    {
        type: "select", name: "gender", label: "Gender",
        options: [{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }],
        validationType: "text", required: true
    },

    { type: "date", name: "dob", label: "Date of Birth", placeholder: "Select Date of Birth", validationType: "date", required: true },

    { type: "number", name: "age", label: "Age", placeholder: "Enter Age", validationType: "number", required: true },

    { type: "text", name: "phoneNumber", label: "Phone Number", placeholder: "Enter Phone Number", validationType: "phone", required: true },

    { type: "text", name: "emailAddress", label: "Email Address", placeholder: "Enter Email Address", validationType: "email", required: true },

    { type: "text", name: "homeAddress", label: "Home Address", placeholder: "Enter Home Address", validationType: "text", required: true },

    { type: "checkbox", name: "commitment", label: "Commitment to volunteering every Sunday", validationType: "boolean", required: true },

    {
        type: "select", name: "islamicEducationLevel", label: "Level of Islamic Education/Knowledge",
        options: [
            { value: "Basic", label: "Basic" },
            { value: "Intermediate", label: "Intermediate" },
            { value: "Advanced", label: "Advanced" }
        ], validationType: "text", required: true
    },

    { type: "text", name: "attendanceAtPrograms", label: "Attendance at Islamic Programs/Institutions (Specify)", placeholder: "Enter Details", validationType: "text", required: false },

    { type: "text", name: "teachingCertifications", label: "Teaching Certifications/Qualifications (if any)", placeholder: "Enter Certifications", validationType: "text", required: false },

    { type: "text", name: "teachingExperience", label: "Previous Teaching Experience (Describe)", placeholder: "Describe Teaching Experience", validationType: "text", required: false },

    { type: "text", name: "experienceWithChildren", label: "Experience Working with Children/Young People", placeholder: "Describe Experience", validationType: "text", required: false },

    { type: "text", name: "refTeacher1_name", label: "Reference 1 Name", placeholder: "Enter Name", validationType: "text", required: true },
    { type: "text", name: "refTeacher1_contact", label: "Reference 1 Contact Information", placeholder: "Enter Contact", validationType: "phone", required: true },
    { type: "text", name: "refTeacher1_relation", label: "Reference 1 Relation", placeholder: "Enter Relation", validationType: "text", required: true },

    { type: "text", name: "refTeacher2_name", label: "Reference 2 Name", placeholder: "Enter Name", validationType: "text", required: true },
    { type: "text", name: "refTeacher2_contact", label: "Reference 2 Contact Information", placeholder: "Enter Contact", validationType: "phone", required: true },
    { type: "text", name: "refTeacher2_relation", label: "Reference 2 Relation", placeholder: "Enter Relation", validationType: "text", required: true }
];
