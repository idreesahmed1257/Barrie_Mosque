"use client";
import islam1 from '@/assets/images/shared/islamic_counseling_1.jpg';
import islam2 from '@/assets/images/shared/islamic_counseling_2.jpg';
import islam3 from '@/assets/images/shared/islamic_counseling_3.jpg';
import islam4 from '@/assets/images/shared/islamic_counseling_4.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import ContactUsForm from '@/components/Shared/ContactUs/ContactUsForm';
import { MAILS } from '@/components/Shared/enums';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import axios from 'axios';
import toast from 'react-hot-toast';

const RevertsToIslam = () => {

    const handleFormSubmit = async (payload) => {
        const sendEmailPromise = axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`, {
            data: payload,
            mailType: "reverts_to_islam",
            mailTo: MAILS.revert
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
            <Slide src={islam2} heading={"Reverts to Islam"} subheading={"Support and Guidance for New Muslims on Their Journey to Islam"} />
            <br />
            <HomeTitle text={'Guidance & Support'} />
            <Mission content={content.revertsToIslam.about} />

            <br />
            <InfoBox
                src={islam1}
                title={"Begin Your Journey"}
                text={content.revertsToIslam.begin}
                flexDirection={"row"}
            />
            <br />
            <br />
            <InfoBox
                src={islam3}
                title={"Learn and Connect"}
                text={content.revertsToIslam.learn}
                flexDirection={"row-reverse"}
            />
            <br />
            <br />
            <InfoBox
                src={islam4}
                title={"Gather and Grow"}
                text={content.revertsToIslam.grow}
                flexDirection={"row"}
            />
            <br />
            <br />


            <HomeTitle text={'Reach out to us using the form below'} />
            <br />
            <ContactUsForm submitForm={handleFormSubmit} text={"Fill out the form below to submit your request at our mosque."} />
            <br />
        </main>
    )
}

export default RevertsToIslam
