"use client";
import { Facebook, Instagram, PinDropOutlined, Twitter, WhatsApp } from '@mui/icons-material';
import { Box, Grid, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/images/logos/logo1.png';
import Button1 from '../Buttons/Button1';
import styles from './footer.module.scss';
import { ourServicesItems, quickLinkItems } from './helper';

const Footer = () => {
    return (
        <Grid container p={3} xs={12} sx={{ height: { md: '300px', xs: '600px' } }} className={styles.footerContainer}>
            <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} xs={6} md={2.8}>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={250} height={63} />
                </Link>
                <Grid item display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                    <p className={styles.infoText} >155 Ferris Lane, <br /> Barrie, Ontario. Canada</p>
                    <br />
                    <Link className='row-gap-2' href={'/'}>

                        <IconButton className={styles.icon} size="large">
                            <PinDropOutlined fontSize="small" />
                        </IconButton>
                        <p className={styles.refLink}>Google Map</p>

                    </Link>

                </Grid>
            </Grid>
            <Grid item display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'} xs={6} md={2.8}>
                <h3>Quick Links</h3>
                <br />
                {quickLinkItems?.map((item, idx) => (
                    <Link key={idx} className={styles.refLink} href={item?.link}>
                        <p>{item?.label}</p>
                    </Link>
                ))}
            </Grid>
            <Grid item display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'} xs={6} md={2.8}>
                <h3>Our Services</h3>
                <br />
                {ourServicesItems?.map((item, idx) => (
                    <Link key={idx} className={styles.refLink} href={item?.link}>
                        <p>{item?.label}</p>
                    </Link>
                ))}
            </Grid>
            <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} xs={6} md={2.8}>
                <h3>Social Links</h3>
                <br />
                <Grid xs={12} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} >
                    <Grid className='row-gap-2' justifyContent={'center'}>
                        <IconButton className={styles.icon} size="large">
                            <Facebook fontSize="small" />
                        </IconButton>
                        <IconButton className={styles.icon} size="large">
                            <Twitter fontSize="small" />
                        </IconButton>
                        <IconButton className={styles.icon} size="large">
                            <Instagram fontSize="small" />
                        </IconButton>
                        <IconButton className={styles.icon} size="large">
                            <WhatsApp fontSize="small" />
                        </IconButton>
                    </Grid>
                    <Button1>Donate Now</Button1>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
