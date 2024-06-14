import { NotificationsOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from './community.module.scss';
const CommunityCard = ({ name, title, description, image }) => {
    return (
        <Grid container mx={2} sm={12} md={11} className={styles.cardContainer}  >
            <Grid display={'flex'} flexDirection={'column'} className={styles.textContainer} gap={1} item sm={12} md={7}>
                <Grid display={'flex'} gap={1} >
                    <NotificationsOutlined />
                    <p>{title}</p>
                </Grid>
                <p>{name}</p>
                <p>{description}</p>
            </Grid>
            <Grid display={'flex'} justifyContent={'flex-end'} overflow={'hidden'} item sm={12} md={5}>
                <Image src={image} alt="com1" className={styles.image} />
            </Grid>
        </Grid>
    );
};

export default CommunityCard;
