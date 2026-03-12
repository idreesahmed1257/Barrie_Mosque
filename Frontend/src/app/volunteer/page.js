"use client"
import vol1 from '../../assets/images/shared/volunteer2.jpg';
import vol2 from '../../assets/images/shared/volunteer.jpg';
import vol3 from '../../assets/images/shared/volunteer3.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import DynamicForm from '@/components/Shared/DynamicForm/DynamicForm';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import { VolunteerFormFields } from './helper';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MAILS } from '@/components/Shared/enums';
import apiInterceptor from '@/lib/api';
const Volunteer = () => {


  const handleFormSubmit = async (payload) => {
    const sendEmailPromise = apiInterceptor.post(`/send-email`, {
      data: payload,
      mailType: "volunteer",
      mailTo: MAILS.secretary
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
      <Slide src={vol1} heading={"Volunteer"} subheading={"A world of active funSignup to become a volunteer & help the community"} />
      <br />
      <HomeTitle text={'Making a Difference'} />
      <InfoBox
        src={vol2}
        title={""}
        text={""}
        points={content.volunteering.intro}
        flexDirection={"row"}
      />
      <HomeTitle text={'Opportunities'} />
      <Mission content={content.volunteering.opportunities} />
      <br />
      <br />
      <HomeTitle text={`Benefits`} />
      <InfoBox
        src={vol3}
        title={""}
        points={content.volunteering.benefits}
        flexDirection={"row-reverse"}
      />
      <br />
      <HomeTitle text={'Become a Volunteer'} />
      <br />
      <DynamicForm text={"Register Now"} formFields={VolunteerFormFields} handleSubmitForm={handleFormSubmit} />
      <br />
      <br />
    </main>
  )
}

export default Volunteer
