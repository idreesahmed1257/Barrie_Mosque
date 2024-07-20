import Image from 'next/image';
import Button3 from '../Shared/Buttons/Button3';
import styles from './home.module.scss';
import "@fontsource/amiri-quran/400.css";
const Slide = ({ src, heading, subheading, surahName, btnText }) => (
    <div className={styles.slideContainer}>
        <div className={styles.slideImageWrapper}>
            <Image
                src={src}
                alt={heading}
                layout="fill"
                objectFit="cover"
                className={styles.slideImage}
            />
        </div>
        <div className={styles.slideOverlay}>
            <h1 className={styles.slideHeading}>{heading}</h1>
            <p className={styles.slideSubheading}>{subheading}</p>
            <p className={styles.slideSubheading}>{surahName}</p>
            {btnText &&
                <Button3>{btnText}</Button3>
            }
        </div>
    </div>
);

export default Slide;
