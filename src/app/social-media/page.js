import fun1 from '@/assets/images/shared/fun1.jpg';
import facebook from '@/assets/images/shared/facebook.png';
import instagram from '@/assets/images/shared/instagram.png';
import masjidApp from '@/assets/images/shared/masjidApp.png';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import "@fontsource/quicksand";
import styles from '../../components/Social/social.module.scss';
import Image from 'next/image';
import { Grid } from '@mui/material';
import Link from 'next/link';
import MasjidApp from '@/components/Social/MasjidApp';

const SocialMedia = () => {
    return (
        <main>
            <Slide src={fun1} heading={"Social Media"} subheading={"Connect with us on social platforms"} />
            <br />
            <br />
            <HomeTitle text={'Social Links'} />
            <div className={styles.socialLinks}>
                <div className={styles.socialLink}>
                    <a href="https://www.facebook.com/BarrieMosque" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Image src={facebook} alt="Facebook" />
                        {/* <FacebookRounded /> */}
                        <span>Facebook</span>
                    </a>
                </div>
                <div className={styles.socialLink}>
                    <a href="https://www.instagram.com/barriemosque/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Image src={instagram} alt="Instagram" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
            <br />

        </main>
    )
}

export default SocialMedia;
