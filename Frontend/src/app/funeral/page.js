'use client'
import fun1 from '@/assets/images/shared/fun1.jpg';
import fun3 from '@/assets/images/shared/fun3.jpg';
import funeral from "@/assets/images/shared/Funeral.jpg";
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import ContactUsForm from '@/components/Shared/ContactUs/ContactUsForm';
import { MAILS } from '@/components/Shared/enums';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import apiInterceptor from '@/lib/api';
import toast from 'react-hot-toast';
const Marriage = () => {

  const handleFormSubmit = async (payload) => {
    const sendEmailPromise = apiInterceptor.post(`/send-email`, {
      data: payload,
      mailType: "funeral",
      mailTo: MAILS.imam
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
      <Slide src={funeral} heading={"Funeral"} subheading={"Helping you during this difficult time"} />
      <br />
      <br />
      <InfoBox
        src={fun1}
        title={"Support and Comfort"}
        text={content.funeral.support}
        flexDirection={"row-reverse"}
      />
      <br />
      <br />
      <InfoBox
        src={fun3}
        title={"Contact Information"}
        text={content.funeral.contact}
        flexDirection={"row"}
      />
      <br />
      <br />
      <HomeTitle text={'Funeral Services'} />
      <Mission content={content.funeral.services} />

      <HomeTitle text={'Get our services'} />
      <br />
      <ContactUsForm submitForm={handleFormSubmit} text={"Fill out the form below to submit your Funeral request or inquiry at our mosque."} />
      <br />
      <br />
    </main>
  )
}

export default Marriage
