import teacher1 from '@/assets/images/shared/teacher1.jpg';
import teacher2 from '@/assets/images/shared/teacher2.jpg';
import teacher3 from '@/assets/images/shared/teacher3.jpg';
import Mission from '@/components/AboutUs/Mission';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";
import styles from '../../styles/shared.module.scss';
import Link from 'next/link';
const PrincipleAndTeachers = () => {
    return (
        <main>
            <Slide src={teacher1} heading={"Principle & Teachers"} subheading={"Meet the dedicated staff guiding our students"} />
            <br />
            <HomeTitle text={'The Heart of Organization'} />
            <InfoBox
                src={teacher2}
                title={""}
                text={""}
                points={content.teachers.intro}
                flexDirection={"row-reverse"}
            />
            <HomeTitle text={'Teaching Approach'} />
            <Mission content={content.teachers.approach} />
            <br />
            <br />
            <HomeTitle text={`Commitment to Excellence`} />
            <InfoBox
                src={teacher3}
                title={""}
                points={content.teachers.commitment}
                flexDirection={"row"}
            />
            <br />
            <div className='row-center'>
                <Link href={"#"} className={styles.registerBtn}>
                    Become a Teacher
                </Link>
            </div>
            <br />
        </main>
    )
}

export default PrincipleAndTeachers
