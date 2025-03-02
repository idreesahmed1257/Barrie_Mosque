import sun1 from '@/assets/images/shared/sun1.jpg';
import sun2 from '@/assets/images/shared/sun2.jpg';
import sun3 from '@/assets/images/shared/sun3.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import SundaySchoolForm from './SundaySchoolForm';
const SundaySchool = () => {

    return (
        <main>
            <Slide src={sun2} heading={"Sunday School"} subheading={"Learning your faith is a long journey that is best taken on a consistent basis."} />
            <br />
            <HomeTitle text={'About Sunday School'} />
            <InfoBox
                src={sun1}
                title={""}
                text={""}
                points={content.sundaySchool.about}
                flexDirection={"row-reverse"}
                buttonText={"Become a Teacher"}
                buttonRef={"become-a-teacher"}
            />

            <HomeTitle text={'Topics'} />
            <Mission content={content.sundaySchool.topics} />
            <br />
            <br />
            <HomeTitle text={`Our Goals`} />
            <InfoBox
                src={sun3}
                title={""}
                text={content.sundaySchool.goals}
                flexDirection={"row"}
            />
            <br />
            <br />
            <SundaySchoolForm text={"Register Now"} />
            <br />
            <br />
        </main>
    )
}

export default SundaySchool
