import activity1 from '@/assets/images/shared/Annual_Family_Fun_Day.jpg';
import activity2 from '@/assets/images/shared/Activities_Events.jpg';
import activity3 from '@/assets/images/shared/AnnualBBQ.jpg';
import activity4 from '@/assets/images/shared/Ramadan.jpg';
import activity5 from '@/assets/images/shared/basketball.jpg';
import activity6 from '@/assets/images/shared/CommunityandGrowth.jpg';
import activity7 from '@/assets/images/shared/winteryouthretreat.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
const ActivitiesEvents = () => {
    return (
        <main>
            <Slide src={activity2} heading={"Activities & Events"} subheading={"Discover a World of Fun and Memorable Experiences"} />
            <br />
            <HomeTitle text={'Community Celebrations'} />
            <Mission content={content.activities.communityCelebrations} />
            <br />
            <InfoBox
                src={activity3}
                title={"Annual BBQ"}
                text={content.activities.barBQ}
                flexDirection={"row-reverse"}
            />
            <br />
            <br />
            <InfoBox
                src={activity1}
                title={"Annual Family Fun Day"}
                text={content.activities.funDay}
                flexDirection={"row"}
            />
            <br />
            <br />
            <InfoBox
                src={activity4}
                title={"Ramadan"}
                text={content.activities.ramadan}
                flexDirection={"row-reverse"}
            />

            <br />
            <HomeTitle text={'Youth Engagement & Activities'} />
            <Mission content={content.activities.youthEngagement} />

            <br />
            <InfoBox
                src={activity5}
                title={"Friday Night Basketball"}
                text={content.activities.fridayNight}
                flexDirection={"row-reverse"}
            />
            <br />
            <br />
            <InfoBox
                src={activity6}
                title={"Community & Growth"}
                text={content.activities.intro}
                flexDirection={"row"}
            />
            <br />
            <InfoBox
                src={activity7}
                title={"Winter Youth Retreat"}
                text={content.activities.winterYouth}
                flexDirection={"row-reverse"}
            />
            <br />
            <br />
        </main>
    )
}

export default ActivitiesEvents
