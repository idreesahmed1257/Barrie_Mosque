import wed3 from '@/assets/images/shared/wed3.jpg';
import wed2 from '@/assets/images/shared/wed2.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
const Marriage = () => {
    return (
        <main>
            <Slide src={wed2} heading={"Marriage"} subheading={"See all available slots for Barrie Mosque & process your booking online"} />
            <br />
            <HomeTitle text={'Licensed Marriage Officiant'} />
            <InfoBox
                src={wed3}
                title={""}
                text={""}
                points={content.marriage.licensed}
                flexDirection={"row-reverse"}
            />
            <HomeTitle text={'General Guidelines '} />
            <Mission content={content.marriage.guidlines} />
            <br />
            <br />
        </main>
    )
}

export default Marriage
