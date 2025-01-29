import hero3 from '@/assets/images/shared/hero5.png';
import islam1 from '@/assets/images/shared/islam1.jpg';
import islam2 from '@/assets/images/shared/islam2.jpg';
import islam3 from '@/assets/images/shared/islam3.jpg';
import Slide from '@/components/Home/HomeSlide';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import "@fontsource/quicksand";
import HomeTitle from '@/components/Home/HomeTitle';
import Mission from '@/components/AboutUs/Mission';
import { content } from '@/components/Shared/static/helper';

const AboutIslam = () => {
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
        </main>
    )
}

export default AboutIslam
