"use client";
import bec1 from '@/assets/images/shared/bec1.jpg';
import bec2 from '@/assets/images/shared/bec2.jpg';
import bec3 from '@/assets/images/shared/bec3.jpg';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import DynamicForm from '@/components/Shared/DynamicForm/DynamicForm';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import { teacherFormFields } from './helper';
import toast from 'react-hot-toast';
const PrincipleAndTeachers = () => {

    const handleSubmit = (formData) => {
        console.log(formData);
        toast.success('Thank you for your application, we will reach out to you within the next 1-2 weeks');
    }
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
                src={bec2}
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
                src={bec3}
                title={""}
                points={content.becomeTeacher.difference}
                flexDirection={"row"}
            />
            <br />
            <br />
            <br />
            <DynamicForm text={"Become a teacher / assistant teacher"} formFields={teacherFormFields} handleSubmitForm={handleSubmit} />
            <br />
            <br />

        </main>
    )
}

export default PrincipleAndTeachers
