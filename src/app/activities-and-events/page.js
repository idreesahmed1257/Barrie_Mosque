import islam1 from '@/assets/images/shared/islam1.jpg';
import islam2 from '@/assets/images/shared/islam2.jpg';
import islam3 from '@/assets/images/shared/islam3.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
const ActivitiesEvents = () => {
    return (
        <main>
            <Slide src={islam2} heading={"Sports"} subheading={"A world of active fun"} />
            <br />
            <HomeTitle text={'Physical Health and Teamwork'} />
            <InfoBox
                src={islam1}
                title={""}
                text={""}
                points={content.sports.intro}
                flexDirection={"row-reverse"}
            />
            <HomeTitle text={'Sports Program Benefits'} />
            <Mission content={content.sports.benefits} />
            <br />
            <br />
            <HomeTitle text={`Encouraging a Balanced Lifestyle`} />
            <InfoBox
                src={islam3}
                title={""}
                points={content.sports.balancedLifestyle}
                flexDirection={"row"}
            />
            <br />
            <br />
        </main>
    )
}

export default ActivitiesEvents
