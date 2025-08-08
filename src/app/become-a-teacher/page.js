"use client";
import bec1 from '@/assets/images/shared/bec1.jpg';
import bec2 from '@/assets/images/shared/vol2.jpg';
import bec3 from '@/assets/images/shared/bec3.jpg';
import bec4 from '@/assets/images/shared/teacher1.jpg';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import DynamicForm from '@/components/Shared/DynamicForm/DynamicForm';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import { teacherFormFields } from './helper';
import toast from 'react-hot-toast';
import apiInterceptor from '@/lib/api';
import { MAILS } from '@/components/Shared/enums';
const PrincipleAndTeachers = () => {



    const handleFormSubmit = async (payload) => {
        const sendEmailPromise = apiInterceptor.post(`/send-email`, {
            data: payload,
            mailType: "teacher_registration",
            mailTo: MAILS.school
        });

        toast.promise(
            sendEmailPromise,
            {
                loading: "Sending email...",
                success: "Email Sent Successfully, Someone from Mosque will contact you shortly",
                error: "Failed to send email, please try again"
            }
        );

        await sendEmailPromise;
    };

    return (
        <main>
            <Slide src={bec1} heading={"Become a Teacher"} subheading={`"The most superior among you are those who learn the Qur'an and teach it." (Bukhari, 1971, Vol. 6, p. 502)"`} />
            <br />
            <HomeTitle text={'Teacher Responsibilities'} />
            <InfoBox
                src={bec2}
                title={""}
                text={""}
                points={content.becomeTeacher.teacherResponsibilities}
                flexDirection={"row-reverse"}
            />
            <HomeTitle text={'Assistant  Teacher Responsibilities'} />
            <InfoBox
                src={bec3}
                title={""}
                text={""}
                points={content.becomeTeacher.assistantTeacherResponsibilities}
                flexDirection={"row"}
            />
            <HomeTitle text={'Make a Positive Impact'} />
            <InfoBox
                src={bec2}
                title={""}
                text={""}
                points={content.becomeTeacher.impact}
                flexDirection={"row-reverse"}
            />

            <HomeTitle text={`Make a Lasting Difference`} />
            <InfoBox
                src={bec4}
                title={""}
                points={content.becomeTeacher.difference}
                flexDirection={"row"}
            />
            <br />
            <br />
            <br />
            <DynamicForm text={"Become a teacher / assistant teacher"} formFields={teacherFormFields} handleSubmitForm={handleFormSubmit} />
            <br />
            <br />

        </main>
    )
}

export default PrincipleAndTeachers
