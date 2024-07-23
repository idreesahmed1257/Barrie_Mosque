import sports1 from '@/assets/images/shared/sports1.jpg';
import sports2 from '@/assets/images/shared/sports3.jpg';
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
            <ContactUsForm text={"Complete the form below and embark on a journey to enriching experiences within our mosque."} />

            <br />
        </main>
    )
}

export default ContactUs
