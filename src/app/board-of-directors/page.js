import bod1 from '@/assets/images/shared/bod1.jpg';
import director1 from '@/assets/images/shared/director1.jpg';
import islam1 from '@/assets/images/shared/islam1.jpg';
import ProfileCard from '@/components/BoardOfDirectors/ProfileCard';
import ProfileContainer from '@/components/BoardOfDirectors/ProfileContainer';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import InfoBox from '@/components/Shared/InfoBox/InfoBox';
import { content } from '@/components/Shared/static/helper';
import "@fontsource/quicksand";

const BoardOfDirectors = () => {
    return (
        <main>
            <Slide src={director1} heading={"Board of Directors"} subheading={"Meet the leadership team"} />
            <br />

            <br />
            {/* <HomeTitle text={'Meet Board Of Directors'} /> */}
            <ProfileContainer />
            <br />
        </main>
    )
}

export default BoardOfDirectors
