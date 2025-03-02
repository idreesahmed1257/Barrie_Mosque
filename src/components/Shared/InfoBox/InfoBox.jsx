"use client"
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Button2 from '../Buttons/Button2';
import styles from './info.module.scss';
import Link from 'next/link';

const InfoBox = ({ src, title, text, flexDirection, points, buttonRef = "", buttonText = false }) => {
    return (
        <Grid px={2} container className={styles.infoBox} sx={{ flexDirection }} spacing={2}>
            <Grid item xs={12} md={6} className={styles.imageContainer}>
                <Image src={src} alt={title} className={styles.image} />
            </Grid>
            <Grid item xs={12} md={6} className={styles.textContainer}>
                <Typography variant="h5" className={styles.title}>
                    {title}
                </Typography>
                {text ?
                    <Typography className={styles.body}>
                        {text}
                    </Typography>
                    :
                    <ul>
                        {
                            points?.map((point, idx) => (
                                <li key={idx} className={styles.list}>
                                    {point}
                                </li>
                            ))
                        }
                    </ul>
                }
                {buttonText &&
                    <Grid alignSelf={'center'}>
                        <Link href={buttonRef}>
                            <Button2 type="text">{buttonText}</Button2>
                        </Link>
                    </Grid>
                }
            </Grid>

        </Grid>
    );
};

export default InfoBox;
