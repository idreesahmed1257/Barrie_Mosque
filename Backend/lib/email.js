export const getHtmlTemplate = (mailType, data) => {
    switch (mailType) {
        case "contact_imam":
            return contactImamTemplate({ ...data });
        case "contact_us":
            return contactUsTemplate({ ...data });
        case "suggest_event":
            return contactUsTemplate({ ...data });
        case "marriage":
            return contactUsTemplate({ ...data });
        case "funeral":
            return contactUsTemplate({ ...data });
        case "islamic_counseling":
            return contactUsTemplate({ ...data });
        case "reverts_to_islam":
            return contactUsTemplate({ ...data });
        case "volunteer":
            return volunteerTemplate({ ...data });
        case "sunday_school_registration":
            return sundaySchoolTemplate({ ...data });
        case "arabic_school_registration":
            return arabicSchoolTemplate({ ...data });
        case "teacher_registration":
            return becomeATeacherTemplate({ ...data });
        default:
            return `<html><body><p>No template found for ${mailType}</p></body></html>`;
    }
};

const contactImamTemplate = ({ name, email, phone, message }) => {
    return `
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Question Received</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <p style="font-size: 16px; color: #042A29; font-weight: bold;">Dear Imam Sahib, Someone has submitted a question that requires your response:</p>

                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px; border: 1px solid #e0e0e0; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name || "-"}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${email || "-"}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${phone || "-"}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; vertical-align: top;">Message:</td>
                        <td style="padding: 10px;">${message || "-"}</td>
                    </tr>
                </table>

                <div style="margin-top: 30px; padding: 15px; background-color: #e8f0e9; border-left: 4px solid #042A29;">
                    <p style="margin: 0; font-size: 14px;">Please respond to this inquiry as soon as possible. You can reply directly to the ${email} to reach the sender.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center; font-size: 14px;">
                <p style="margin: 0;">Barrie Mosque</p>
            </td>
        </tr>
    </table>
</body>
    `
}


const contactUsTemplate = ({ name, email, phone, message }) => {
    return `
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Question Received</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <p style="font-size: 16px; color: #042A29; font-weight: bold;">Dear Imam Sb, Someone has submitted a question that requires your response:</p>

                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px; border: 1px solid #e0e0e0; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; vertical-align: top;">Message:</td>
                        <td style="padding: 10px;">${message}</td>
                    </tr>
                </table>

                <div style="margin-top: 30px; padding: 15px; background-color: #e8f0e9; border-left: 4px solid #042A29;">
                    <p style="margin: 0; font-size: 14px;">Please respond to this inquiry as soon as possible. You can reply directly to the ${email} to reach the sender.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center; font-size: 14px;">
                <p style="margin: 0;">Barrie Mosque</p>
            </td>
        </tr>
    </table>
</body>
    `
}



const volunteerTemplate = ({ name, email, phone, message, homeAddress, gender, age }) => {
    return `
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Volunteer Registration</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <p style="font-size: 16px; color: #042A29; font-weight: bold;">Dear Organizing Secretary, Someone has registered as a volunteer:</p>

                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px; border: 1px solid #e0e0e0; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Age:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${age}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Gender:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${gender}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; border-bottom: 1px solid #e0e0e0;">Address:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${homeAddress}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 120px; vertical-align: top;">Message:</td>
                        <td style="padding: 10px;">${message}</td>
                    </tr>
                </table>

                <div style="margin-top: 30px; padding: 15px; background-color: #e8f0e9; border-left: 4px solid #042A29;">
                    <p style="margin: 0; font-size: 14px;">Please contact this volunteer at ${email} or ${phone} to discuss their participation.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center; font-size: 14px;">
                <p style="margin: 0;">Barrie Mosque</p>
            </td>
        </tr>
    </table>
</body>
    `
}


const sundaySchoolTemplate = ({
    parentName,
    parentPhone,
    parentEmail,
    homeAddress,
    noOfChildren,
    childrenInfo
}) => {
    // Generate the HTML for each student's information
    const childrenHtml = childrenInfo.map((child, index) => {
        return `
      <tr>
        <td colspan="2" style="padding: 10px; background-color: #3b3f58; color: white; font-weight: bold; text-align: center; border-bottom: 1px solid #ccc;">Student ${index + 1} Information</td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Name:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ccc;">${child.studentName}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Age:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ccc;">${child.studentAge}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Gender:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ccc;">${child.studentGender}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Allergies:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ccc;">${child.allergies}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Previous Class:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ccc;">${child.previousClass}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">First Time Registration:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ccc;">${child.isFirstTime ? 'Yes' : 'No'}</td>
      </tr>
    `;
    }).join('');

    return `
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <tr>
      <td style="padding: 20px; background-color: #1c1f3b; color: white; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">New Sunday School Registration</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <p style="font-size: 16px; color: #1c1f3b; font-weight: bold;">A new Sunday School registration has been submitted:</p>

        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px; border: 1px solid #ccc; border-collapse: collapse;">
          <tr>
            <td colspan="2" style="padding: 10px; background-color: #1c1f3b; color: white; font-weight: bold; text-align: center; border-bottom: 1px solid #ccc;">Parent & Contact Information</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Parent Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ccc;">${parentName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Parent Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ccc;">${parentEmail}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Parent Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ccc;">${parentPhone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Home Address:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ccc;">${homeAddress}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f0f0f5; font-weight: bold; width: 150px; border-bottom: 1px solid #ccc;">Number of Children:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ccc;">${noOfChildren}</td>
          </tr>

          ${childrenHtml}
        </table>

        <div style="margin-top: 30px; padding: 15px; background-color: #f0f0f5; border-left: 4px solid #1c1f3b;">
          <p style="margin: 0; font-size: 14px;">Please process this Sunday School registration and contact the parent or contact person using the provided email or phone number for further details.</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; background-color: #1c1f3b; color: white; text-align: center; font-size: 14px;">
        <p style="margin: 0;">Barrie Mosque</p>
      </td>
    </tr>
  </table>
</body>
  `;
};



const becomeATeacherTemplate = ({
    fullName,
    gender,
    dob,
    age,
    phoneNumber,
    emailAddress,
    homeAddress,
    commitment,
    islamicEducationLevel,
    attendanceAtPrograms,
    teachingCertifications,
    teachingExperience,
    experienceWithChildren,
    refTeacher1_name,
    refTeacher1_contact,
    refTeacher1_relation,
    refTeacher2_name,
    refTeacher2_contact,
    refTeacher2_relation
}) => {
    // Format date if it's a valid date string
    const formattedDate = new Date(dob).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return `
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Teacher Application</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <p style="font-size: 16px; color: #042A29; font-weight: bold;">A new application to become a teacher has been submitted:</p>

                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px; border: 1px solid #e0e0e0; border-collapse: collapse;">
                    <tr>
                        <td colspan="2" style="padding: 10px; background-color: #042A29; color: white; font-weight: bold; text-align: center; border-bottom: 1px solid #e0e0e0;">Personal Information</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Full Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${fullName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Gender:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${gender}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Date of Birth:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${formattedDate}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Age:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${age}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Phone Number:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${phoneNumber}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Email Address:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${emailAddress}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Home Address:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${homeAddress}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Commitment to Teaching:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${commitment ? 'Yes' : 'No'}</td>
                    </tr>
                    
                    <tr>
                        <td colspan="2" style="padding: 10px; background-color: #042A29; color: white; font-weight: bold; text-align: center; border-bottom: 1px solid #e0e0e0;">Qualifications & Experience</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Islamic Education Level:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${islamicEducationLevel}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Attendance at Programs:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${attendanceAtPrograms}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Teaching Certifications:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${teachingCertifications}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Teaching Experience:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${teachingExperience}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Experience with Children:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${experienceWithChildren}</td>
                    </tr>
                    
                    <tr>
                        <td colspan="2" style="padding: 10px; background-color: #042A29; color: white; font-weight: bold; text-align: center; border-bottom: 1px solid #e0e0e0;">References</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Reference 1 Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${refTeacher1_name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Reference 1 Contact:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${refTeacher1_contact}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Reference 1 Relation:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${refTeacher1_relation}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Reference 2 Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${refTeacher2_name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Reference 2 Contact:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${refTeacher2_contact}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 180px; border-bottom: 1px solid #e0e0e0;">Reference 2 Relation:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${refTeacher2_relation}</td>
                    </tr>
                </table>

                <div style="margin-top: 30px; padding: 15px; background-color: #e8f0e9; border-left: 4px solid #042A29;">
                    <p style="margin: 0; font-size: 14px;">Please review this teacher application and contact the applicant at ${emailAddress} or ${phoneNumber} to schedule an interview.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center; font-size: 14px;">
                <p style="margin: 0;">Barrie Mosque</p>
            </td>
        </tr>
    </table>
</body>
    `
}


const arabicSchoolTemplate = ({
    parentName,
    parentEmail,
    parentPhone,
    homeAddress,
    noOfChildren,
    childrenInfo
}) => {
    // Generate the HTML for each child's information
    const childrenHtml = childrenInfo.map((child, index) => {
        return `
            <tr>
                <td colspan="2" style="padding: 10px; background-color: #064e4d; color: white; font-weight: bold; text-align: center; border-bottom: 1px solid #e0e0e0;">Child ${index + 1} Information</td>
            </tr>
            <tr>
                <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${child.childrenName}</td>
            </tr>
            <tr>
                <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Age:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${child.childrenAge}</td>
            </tr>
            <tr>
                <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Gender:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${child.childrenGender}</td>
            </tr>
            <tr>
                <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Allergies:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${child.allergies}</td>
            </tr>
            <tr>
                <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Is 6+ Years Old:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${child.isChildSixYearOld ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
                <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">First Time Registration:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${child.isFirstTime ? 'Yes' : 'No'}</td>
            </tr>
        `;
    }).join('');

    return `
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Arabic School Registration</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <p style="font-size: 16px; color: #042A29; font-weight: bold;">A new Arabic School registration has been submitted:</p>

                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 20px; border: 1px solid #e0e0e0; border-collapse: collapse;">
                    <tr>
                        <td colspan="2" style="padding: 10px; background-color: #042A29; color: white; font-weight: bold; text-align: center; border-bottom: 1px solid #e0e0e0;">Parent Information</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Parent Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${parentName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Parent Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${parentEmail}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Parent Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${parentPhone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Home Address:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${homeAddress}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #e8f0e9; font-weight: bold; width: 150px; border-bottom: 1px solid #e0e0e0;">Number of Children:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${noOfChildren}</td>
                    </tr>
                    
                    ${childrenHtml}
                </table>

                <div style="margin-top: 30px; padding: 15px; background-color: #e8f0e9; border-left: 4px solid #042A29;">
                    <p style="margin: 0; font-size: 14px;">Please process this Arabic School registration and contact the parent at ${parentEmail} or ${parentPhone} with further information.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; background-color: #042A29; color: white; text-align: center; font-size: 14px;">
                <p style="margin: 0;">Barrie Mosque</p>
            </td>
        </tr>
    </table>
</body>
    `
}