'use client'
import funeral from "@/assets/images/shared/SONI2.jpg";
import fun1 from '@/assets/images/shared/SONI1.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';

import "@fontsource/quicksand";
const SONI = () => {

    return (
        <main>
            <Slide src={funeral} heading={"Sisters of Noor-ul-Islam'"} subheading={"“Allah is one and likes Unity”(Muslim)"} />
            <br />
            <br />
            <HomeTitle text={'What is SONI'} />
            <InfoBox
                src={fun1}
                points={content.SONI.about}
                flexDirection={"row-reverse"}
            />
            <br />
            <br />
            <HomeTitle text={'Goals'} />
            <Mission content={content.SONI.goals} />


            <br />

            <HomeTitle text={'Involvement in the Community'} />

            <InfoBox
                src={funeral}
                title={""}
                points={content.SONI.involvement}
                flexDirection={"row"}
            />

            <br />
        </main>
    )
}

export default SONI
