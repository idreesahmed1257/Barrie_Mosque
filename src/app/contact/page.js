'use client';
import sports1 from '@/assets/images/shared/sports1.jpg';
import sports2 from '@/assets/images/shared/sports2.jpg';
import Mission from '@/components/AboutUs/Mission';
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
            mailType: "contact_us",
            mailTo: "organizingsecretary@barriemosque.ca"
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
            <Slide src={sports1} heading={"General Inquiries"} subheading={"Contact us for any general information"} />
            <br />
            <HomeTitle text={'Contact us'} />
            <ContactUsForm submitForm={handleFormSubmit} text={"Feel free to ask any questions or share your concerns. Your message will be directed to the Masjid Committee."} />
            <HomeTitle text={'Address'} />
            <InfoBox
                src={sports2}
                title={""}
                points={content.contact.address}
                flexDirection={"row-reverse"}
            />
            <br />
        </main>
    )
}

export default ContactUs
