import fun1 from '@/assets/images/shared/fun1.jpg';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import "@fontsource/quicksand";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from '../../components/Social/social.module.scss';

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
                        <FacebookIcon style={{ fontSize: 40, color: '#1877F2' }} />
                        <span>Facebook</span>
                    </a>
                </div>
                <div className={styles.socialLink}>
                    <a href="https://www.instagram.com/barriemosque/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <InstagramIcon style={{ fontSize: 40, color: '#E4405F' }} />
                        <span>Instagram</span>
                    </a>
                </div>
                <div className={styles.socialLink}>
                    <a href="https://wa.me/17059997176" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <WhatsAppIcon style={{ fontSize: 40, color: '#25D366' }} />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
            <br />

        </main>
    )
}

export default SocialMedia;
