import sports1 from '@/assets/images/shared/sports1.jpg';
import sports2 from '@/assets/images/shared/sports2.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import ContactUsForm from '@/components/Shared/ContactUs/ContactUsForm';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
const ContactUs = () => {
    return (
        <main>
            <Slide src={sports1} heading={"General Inquiries"} subheading={"Contact us for any general information"} />
            <br />
            <HomeTitle text={'Contact us'} />
            <ContactUsForm text={"Feel free to ask any questions or share your concerns. Your message will be directed to the Masjid Committee."} />
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
