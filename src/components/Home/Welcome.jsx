import Button2 from '../Shared/Buttons/Button2';
import styles from './home.module.scss';

const Welcome = () => {
    return (
        <div className={styles.welcomeSection}>
            <h1 className={styles.heading}>ASSALAMU ALAYKUM</h1>
            <h2 className={`${styles.subheading}`}>Peace Be Upon You</h2>
            <p className={styles.text}>
                We are proud to be serving the community. We believe that vibrant Muslim communities are catalysts for necessary and positive change. We promise to continue serving you by working collaboratively with excellence.
            </p>
            <Button2>Learn About Us</Button2>
        </div>
    );
};

export default Welcome;
