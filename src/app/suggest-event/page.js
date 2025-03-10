'use client';
import sports1 from '@/assets/images/shared/sports1.jpg';
import sports2 from '@/assets/images/shared/sports3.jpg';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import ContactUsForm from '@/components/Shared/ContactUs/ContactUsForm';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import axios from 'axios';
import toast from 'react-hot-toast';
const ContactUs = () => {

    const handleFormSubmit = async (payload) => {
        const sendEmailPromise = axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`, {
            data: payload,
            mailType: "suggest_event",
            mailTo: "idreesahmed697@gmail.com"
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
            <Slide src={sports1} heading={"Suggest An Event"} subheading={"Propose events to be held at the Masjid"} />
            <br />
            <HomeTitle text={'Suggest An Event'} />
            <InfoBox
                src={sports2}
                title={""}
                text={content.suggest.info}
                flexDirection={"row"}
            />
            <br />
            <br />
            <HomeTitle text={'Fill the Form'} />
            <ContactUsForm submitForm={handleFormSubmit} text={"Complete the form below and embark on a journey to enriching experiences within our mosque."} />

            <br />
        </main>
    )
}

export default ContactUs
