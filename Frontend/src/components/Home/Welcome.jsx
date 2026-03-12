import Link from 'next/link';
import Button2 from '../Shared/Buttons/Button2';
import styles from './home.module.scss';

const Welcome = () => {
  return (
    <div className={styles.welcomeSection}>
      <h1 className={styles.heading}>Mosque in Barrie, Ontario</h1>
      <h2 className={`${styles.subheading}`}>Religious Organization & Community</h2>
      <p className={styles.text}>
        Serving thousands of Muslims across Central Ontario, Barrie Mosque is your community hub for faith, education, and support. From daily prayers and Jummah to Islamic school programs, marriage services, and Janazah support, we're honored to serve families from Newmarket to Sudbury. As a registered charity, your donations directly sustain these vital services for our growing Ummah.
      </p>
      <Link href={"/about"}>
        <Button2>Learn About Us</Button2>
      </Link>
    </div>
  );
};

export default Welcome;
