"use client";
import wed2 from '@/assets/images/shared/wed2.jpg';
import wed3 from '@/assets/images/shared/wed3.jpg';
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
        const sendEmailPromise = apiInterceptor.post(`/api/send-email`, {
            data: payload,
            mailType: "marriage",
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
            <Slide src={wed2} heading={"Marriage"} subheading={"See all available slots for Barrie Mosque & process your booking online"} />
            <br />
            <HomeTitle text={'Licensed Marriage Officiant'} />
            <InfoBox
                src={wed3}
                title={""}
                text={""}
                points={content.marriage.licensed}
                flexDirection={"row-reverse"}
            />
            <HomeTitle text={'General Guidelines '} />
            <Mission content={content.marriage.guidelines} />
            <br />
            <br />
            <ContactUsForm submitForm={handleFormSubmit} text={"Fill out the form below to submit your marriage request or inquiry at our mosque."} />
            <br />
            <br />
        </main>
    )
}

export default Marriage
