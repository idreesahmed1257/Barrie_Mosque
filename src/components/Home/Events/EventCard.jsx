import Button2 from '@/components/Shared/Buttons/Button2'
import { CalendarMonth, IosShare, PinDropOutlined, Share } from '@mui/icons-material'
import { Grid } from '@mui/material'
import Image from 'next/image'
import styles from './events.module.scss'
const EventCard = ({ image, title, date, location }) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;

    return (
        <Grid className={styles.eventCard} mx={2} md={12} lg={11} >
            <Grid className={styles.imageContainer} item>
                <Image src={image} alt="com1" className={styles.imagebg} />
                <Image src={image} alt="com1" className={styles.image} />
            </Grid>
            <Grid item p={2}>
                <p>{title}</p>
                <div className='row-gap-1'>
                    <CalendarMonth />
                    <p>{date}</p>
                </div>
                <a className={`row-gap-1 ${styles.locationAnchor}`} href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <PinDropOutlined />
                    <p>{location}</p>
                </a>
            </Grid>
            <Grid item p={2} className='row-evenly'>
                <Button2>
                    <div className='row-gap-1'>
                        Share<IosShare fontSize='3rem' />
                    </div>

                </Button2>
                <Button2>View</Button2>
            </Grid>
        </Grid>
    )
}

export default EventCard
