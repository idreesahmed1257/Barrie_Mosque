import director1 from '@/assets/images/shared/boardofdirectors.jpg';
import ProfileContainer from '@/components/BoardOfDirectors/ProfileContainer';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import "@fontsource/quicksand";

const BoardOfDirectors = () => {
    return (
        <main>
            <Slide src={director1} heading={"Board of Directors"} subheading={"Meet the leadership team"} />
            <br />

            <br />
            <HomeTitle text={'Meet Our Board Of Directors'} />
            <ProfileContainer />
            <br />
        </main>
    )
}

export default BoardOfDirectors
