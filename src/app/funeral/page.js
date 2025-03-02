import fun2 from '@/assets/images/shared/fun2.jpg';
import fun1 from '@/assets/images/shared/fun1.jpg';
import fun3 from '@/assets/images/shared/fun3.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import funeral from "@/assets/images/shared/Funeral.jpg";

import "@fontsource/quicksand";
const Marriage = () => {
    return (
        <main>
            <Slide src={funeral} heading={"Funeral"} subheading={"Helping you during this difficult time"} />
            <br />
            <br />
            <InfoBox
                src={fun1}
                title={"Support and Comfort"}
                text={content.funeral.support}
                flexDirection={"row-reverse"}
            />
            <br />
            <br />
            <InfoBox
                src={fun3}
                title={"Contact Information"}
                text={content.funeral.contact}
                flexDirection={"row"}
            />
            <br />
            <br />
            <HomeTitle text={'Funeral Services'} />
            <Mission content={content.funeral.services} />


            <br />
        </main>
    )
}

export default Marriage
