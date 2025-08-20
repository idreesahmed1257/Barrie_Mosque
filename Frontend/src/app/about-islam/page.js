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
            <Slide src={islam2} heading={"About Islam"} subheading={"Learn the principles of Islam"} />
            <br />
            <HomeTitle text={'Islamic Faith'} />
            <InfoBox
                src={islam1}
                title={""}
                text={""}
                points={content.aboutIslam.faiths}
                flexDirection={"row-reverse"}
            />
            <HomeTitle text={'Five Pillars'} />
            <Mission content={content.aboutIslam.pillars} />
            <br />
            <br />
            <HomeTitle text={`Quran's Revelation`} />
            <InfoBox
                src={islam3}
                title={""}
                points={content.aboutIslam.revelation}
                flexDirection={"row"}
            />
            <br />
        </main>
    )
}

export default AboutIslam
