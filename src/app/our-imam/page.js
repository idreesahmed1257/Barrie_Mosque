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

const OurImam = () => {
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
        </main>
    )
}

export default OurImam
