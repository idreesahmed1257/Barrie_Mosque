"use client";
import { Email, Facebook, Instagram, LocationCity, Phone, PinDropOutlined, Twitter, WhatsApp } from '@mui/icons-material';
import { Divider, Grid, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/images/logos/logo1.png';
import Button1 from '../Buttons/Button1';
import styles from './footer.module.scss';
import { ourServicesItems, quickLinkItems } from './helper';
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
    return (
        <Grid container px={3} pt={3} xs={12} sx={{ height: { md: '300px', xs: '600px' } }} className={styles.footerContainer}>
            <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} xs={6} md={2.8}>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={250} height={63} />
                </Link>
                <Grid item display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                    <div className={`row-gap-2 ${styles.refLink}`} >
                        <LocationCity fontSize="small" />
                        <p  >155 Ferris Lane, <br /> Barrie, Ontario. Canada</p>
                    </div>
                    <div className={`row-gap-2 ${styles.refLink}`} >
                        <Phone fontSize="small" />
                        <p>705-999-7176</p>
                    </div>
                    <div className={`row-gap-2 ${styles.refLink}`} >
                        <Email fontSize="small" />
                        <p><a className={styles.infoText} href="mailto:barriemosque@gmail.com">barriemosque@gmail.com</a></p>
                    </div>
                    <Link className={`row-gap-2 ${styles.refLink}`} href={'https://maps.app.goo.gl/udiABD2A3eca4GMP8'} target="_blank">
                        <PinDropOutlined fontSize="small" />
                        <p >Google Map</p>
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
                        <Link target='_blank' href={'https://www.facebook.com/BarrieMosque'}>
                            <IconButton className={styles.icon} size="large">
                                <Facebook fontSize="small" />
                            </IconButton>
                        </Link>
                        <Link target='_blank' href={'https://www.instagram.com/barriemosque/?hl=en'}>
                            <IconButton className={styles.icon} size="large">
                                <Instagram fontSize="small" />
                            </IconButton>
                        </Link>
                        <Link target='_blank' href={'https://themasjidapp.org/barrie/download'}>
                            <IconButton className={styles.icon} size="large">
                                <IoLogoGooglePlaystore fontSize={'large'} />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Link href={"https://donorchoice.ca/barriemosque"} target='_blank'>
                        <Button1>Donate Now</Button1>
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'flex-end'}>
                <Link className={styles.refLink} target='_blank' href={'http://www.dricodigital.ca'}>
                    <p>All rights reserved by Drico Digital</p>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Footer
