import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from './bod.module.scss';
const ProfileCard = ({ image, post, name }) => {
    return (
        <Grid xs={12} container className={styles.cardContainer}>
            <Image src={image} width={200} height={200} alt="com1" objectFit='cover' className={styles.bodImage} />
            <p className={styles.post}>{post}</p>
            <p className={styles.nameText}>{name}</p>
        </Grid>
    )
}

export default ProfileCard
