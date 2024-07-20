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
import AddBusiness from '@/components/Business/AddBusiness';

const BusinessDirectory = () => {
    return (
        <main>
            <Slide src={imam} heading={"Business Directory"} subheading={"Discover and Connect with Local Muslim Businesses"} />
            <br />
            <HomeTitle text={`Add your business`} />
            <AddBusiness />
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
            <ContactUsForm showMap={true} text={"Feel free to ask any questions you have. Your message will remain confidential and be shared only with the Imam."} />
            <br />
        </main>
    )
}

export default BusinessDirectory
