import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './info.module.scss';

const InfoBox = ({ src, title, text, flexDirection, points }) => {
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
            </Grid>
        </Grid>
    );
};

export default InfoBox;
