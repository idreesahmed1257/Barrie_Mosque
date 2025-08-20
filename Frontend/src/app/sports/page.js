import sports3 from '@/assets/images/shared/sports3.jpg';
import sports1 from '@/assets/images/shared/sports1.jpg';
import sports2 from '@/assets/images/shared/sports2.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
const Sports = () => {
    return (
        <main>
            <Slide src={sports1} heading={"Sports"} subheading={"A world of active fun"} />
            <br />
            <HomeTitle text={'Physical Health and Teamwork'} />
            <InfoBox
                src={sports3}
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
                src={sports2}
                title={""}
                points={content.sports.balancedLifestyle}
                flexDirection={"row"}
            />
            <br />
            <br />
        </main>
    )
}

export default Sports
