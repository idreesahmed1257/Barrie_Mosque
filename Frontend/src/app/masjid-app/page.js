import fun1 from '@/assets/images/shared/fun1.jpg';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import MasjidApp from '@/components/Social/MasjidApp';
import "@fontsource/quicksand";

const SocialMedia = () => {
    return (
        <main>
            <Slide src={fun1} heading={"Masjid App"} subheading={"Download our official Masjid app"} />

            <HomeTitle text={'Masjid App'} />
            <MasjidApp />
            <br />

        </main>
    )
}

export default SocialMedia;
