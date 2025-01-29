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
            <Slide src={islam2} heading={"Activities & Events"} subheading={"Discover a World of Fun and Memorable Experiences"} />
            <br />
            <HomeTitle text={'Community Celebrations'} />
            <Mission content={content.activities.communityCelebrations} />
            <br />
            <InfoBox
                src={islam1}
                title={"Annual BBQ"}
                text={content.activities.barBQ}
                flexDirection={"row-reverse"}
            />
            <br />
            <InfoBox
                src={islam1}
                title={"Annual Family Fun Day"}
                text={content.activities.funDay}
                flexDirection={"row"}
            />
            <br />
            <InfoBox
                src={islam1}
                title={"Ramadan"}
                text={content.activities.barBQ}
                flexDirection={"row-reverse"}
            />
            <HomeTitle text={'Community Celebrations'} />
            <InfoBox
                src={islam1}
                title={""}
                text={content.activities.ramadan}
                flexDirection={"row-reverse"}
            />
            <br />
            <HomeTitle text={'Youth Engagement & Activities'} />
            <Mission content={content.activities.youthEngagement} />
            <br />
            <InfoBox
                src={islam1}
                title={"Friday Night Basketball"}
                text={content.activities.fridayNight}
                flexDirection={"row-reverse"}
            />
            <br />
            <InfoBox
                src={islam1}
                title={"Community & Growth"}
                text={content.activities.intro}
                flexDirection={"row"}
            />
            <br />
            <InfoBox
                src={islam1}
                title={"Winter Youth Retreat"}
                text={content.activities.winterYouth}
                flexDirection={"row-reverse"}
            />
            <br />
        </main>
    )
}

export default ActivitiesEvents
