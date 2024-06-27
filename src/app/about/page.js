import hero3 from '@/assets/images/shared/hero8.jpg';
import about2 from '@/assets/images/shared/about2.jpg';
import about3 from '@/assets/images/shared/about3.jpg';
import about4 from '@/assets/images/shared/about4.jpg';
import Slide from '@/components/Home/HomeSlide';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import "@fontsource/quicksand";
import HomeTitle from '@/components/Home/HomeTitle';
import Mission from '@/components/AboutUs/Mission';
import { content } from '@/components/Shared/static/helper';

const AboutUs = () => {
    return (
        <main>
            <Slide src={hero3} heading={"About Us"} subheading={"See Insights About Barrie Masjid"} />
            <br />
            <HomeTitle text={'Our Mission'} />
            <Mission content={content.aboutUs.mission} />
            <HomeTitle text={'About Barrie Mosque'} />
            <InfoBox
                src={about4}
                title={content.aboutUs.about.title}
                text={content.aboutUs.about.content}
                flexDirection={"row"}
            />
            <br />
            <br />
            <InfoBox
                src={about3}
                title={content.aboutUs.Leadership.title}
                text={content.aboutUs.Leadership.content}
                flexDirection={"row-reverse"}
            />
            <br />
            <br />
            <HomeTitle text={'History of Barrie Mosque'} />
            <Mission content={content.aboutUs.history} />
            <br />
        </main>
    )
}

export default AboutUs
