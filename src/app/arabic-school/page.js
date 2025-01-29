import sun1 from '@/assets/images/shared/sun1.jpg';
import sun2 from '@/assets/images/shared/sun2.jpg';
import sun3 from '@/assets/images/shared/sun3.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import styles from '../../styles/shared.module.scss';
import Link from 'next/link';
import ContactUsForm from '@/components/Shared/ContactUs/ContactUsForm';
const ArabicSchool = () => {
    return (
        <main>
            <Slide src={sun2} heading={"Arabic School"} subheading={"Mastering the Arabic language unlocks a deeper connection to your faith and heritage."} />
            <br />
            <HomeTitle text={'About Arabic School'} />
            <InfoBox
                src={sun1}
                title={""}
                text={""}
                points={content.arabicSchool.about}
                flexDirection={"row"}
            />
            <HomeTitle text={'Program Structure and Learning Approach'} />
            <Mission content={content.arabicSchool.topics} />
            <br />
            <HomeTitle text={'Register Here'} />
            <br />
            <ContactUsForm showMap={false} text={"Feel free to ask any questions you have. Your message will remain confidential and be shared only with the Imam."} />
            <br />

        </main>
    )
}

export default ArabicSchool
