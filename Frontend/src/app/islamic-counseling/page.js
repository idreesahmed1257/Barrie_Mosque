"use client";
import islam1 from '@/assets/images/shared/Islamic_Counselling_1.jpg';
import islam2 from '@/assets/images/shared/Islamic_Counselling_2.png';
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

const AboutIslam = () => {

  const handleFormSubmit = async (payload) => {
    const sendEmailPromise = apiInterceptor.post(`/send-email`, {
      data: payload,
      mailType: "islamic_counseling",
      mailTo: MAILS.imam
    });

    toast.promise(
      sendEmailPromise,
      {
        loading: "Sending email...",
        success: "Email Sent Successfully, Imam from Mosque will contact you shortly",
        error: "Failed to send email, please try again"
      }
    );

    await sendEmailPromise;
  };

  return (
    <main>
      <Slide src={islam2} heading={"Islamic Counseling"} subheading={"Helping You Navigate Life's Challenges with Faith and Guidance"} />
      <br />
      <HomeTitle text={'Guidance & Support'} />
      <InfoBox
        src={islam1}
        title={""}
        text={content.islamicCounseling.about}
        flexDirection={"row-reverse"}
      />
      <HomeTitle text={'What We Offer'} />
      <Mission content={content.islamicCounseling.offers} />
      <br />
      <HomeTitle text={'Register Form'} />
      <br />
      <ContactUsForm submitForm={handleFormSubmit} text={"Fill out the form below to submit your request at our mosque."} />
      <br />
    </main>
  )
}

export default AboutIslam
