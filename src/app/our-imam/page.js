'use client'
import imam from '@/assets/images/shared/ourImam.jpg';
import imam2 from '@/assets/images/shared/imam2.jpg';
import imam3 from '@/assets/images/shared/imam3.jpg';
import hero3 from '@/assets/images/shared/hero3.jpg';
import Slide from '@/components/Home/HomeSlide';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import "@fontsource/quicksand";
import HomeTitle from '@/components/Home/HomeTitle';
import Mission from '@/components/AboutUs/Mission';
import { content } from '@/components/Shared/static/helper';
import ContactUsForm from '@/components/Shared/ContactUs/ContactUsForm';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MAILS } from '@/components/Shared/enums';

const OurImam = () => {

    const handleFormSubmit = async (payload) => {
        const sendEmailPromise = axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`, {
            data: payload,
            mailType: "contact_imam",
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
            <Slide src={imam} heading={"Our Imam"} subheading={"Know more about our Imam"} />
            <br />
            <HomeTitle text={`Imam Mateen's Journey`} />
            <InfoBox
                src={imam2}
                points={content.ourImam.journy}
                flexDirection={"row-reverse"}
            />
            <HomeTitle text={`Imam Mateen's expertise`} />
            <Mission content={content.ourImam.expertise} />
            <br />
            <br />
            <HomeTitle text={`Imam Mateen's Community Role`} />
            <InfoBox
                src={imam3}
                title={""}
                points={content.ourImam.community}
                flexDirection={"row"}
            />
            <br />
            <HomeTitle text={'Ask Question'} />
            <ContactUsForm submitForm={handleFormSubmit} text={"Feel free to ask any questions you have. Your message will remain confidential and be shared only with the Imam."} />
            <br />
        </main>
    )
}

export default OurImam
