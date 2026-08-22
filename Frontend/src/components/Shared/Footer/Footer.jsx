"use client";
import { Email, Facebook, Instagram, LocationCity, Phone, WhatsApp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import logo from '@/assets/images/logos/logo1.png';
import Button1 from '../Buttons/Button1';
import styles from './footer.module.scss';
import { ourServicesItems, quickLinkItems } from './helper';

const Footer = () => {
    return (
        <Grid
            container
            px={3}
            py={3}
            rowGap={4}
            sx={{
                height: { md: '300px', xs: 'auto' },
                textAlign: { xs: 'center', md: 'left' }
            }}
            className={styles.footerContainer}
        >
            <Grid
                item
                xs={12} sm={6} md={2.8}
                display="flex"
                flexDirection="column"
                alignItems={{ xs: 'center', md: 'flex-start' }}
                rowGap={2} // Added spacing
            >
                <Link href="/">
                    <Image src={logo} alt="Logo" width={200} height={50} />
                </Link>
                <Grid item xs={12} display="flex" flexDirection="column" rowGap={1.5}>
                    <div className={`row-gap-2 ${styles.refLink}`} >
                        <LocationCity fontSize="small" />
                        <p>Barrie Mosque<br />155 Ferris Lane, <br /> Barrie, Ontario, Canada</p>
                    </div>
                    <div className={`row-gap-2 ${styles.refLink}`} >
                        <Phone fontSize="small" />
                        <p>(705) 726-4594</p>
                    </div>
                    <div className={`row-gap-2 ${styles.refLink}`} >
                        <Email fontSize="small" />
                        <p><a className={styles.infoText} href="mailto:barriemosque@gmail.com">barriemosque@gmail.com</a></p>
                    </div>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={2.8} display="flex" flexDirection="column" alignItems="center" rowGap={2}>
                <h3>Quick Links</h3>
                {quickLinkItems.map((item, idx) => (
                    <Link key={idx} className={styles.refLink} href={item.link}>
                        <p>{item.label}</p>
                    </Link>
                ))}
            </Grid>

            <Grid item xs={12} sm={6} md={2.8} display="flex" flexDirection="column" alignItems="center" rowGap={2}>
                <h3>Our Services</h3>
                {ourServicesItems.map((item, idx) => (
                    <Link key={idx} className={styles.refLink} href={item.link}>
                        <p>{item.label}</p>
                    </Link>
                ))}
            </Grid>

            <Grid item xs={12} sm={6} md={2.8} display="flex" flexDirection="column" alignItems="center" rowGap={2}>
                <h3>Social Links</h3>
                <Grid display="flex" flexDirection="row" justifyContent="center" gap={2}>
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
                            <IoLogoGooglePlaystore fontSize="large" />
                        </IconButton>
                    </Link>
                    <Link target='_blank' href={'https://chat.whatsapp.com/BlaPcwWOlStGrWbc2Ug0il'}>
                        <IconButton className={styles.icon} size="large">
                            <WhatsApp fontSize="small" />
                        </IconButton>
                    </Link>
                </Grid>
                <Link href={"https://donorchoice.ca/barriemosque"} target='_blank'>
                    <Button1>Donate Now</Button1>
                </Link>
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column" rowGap={1}>
                <p><b>Charity No:</b> 119058576RR0001</p>
                <Link className={styles.refLink} target='_blank' href={'http://www.dricodigital.ca'}>
                    <p style={{ fontSize: "12px" }}>All rights reserved by Drico Digital</p>
                </Link>
            </Grid>
        </Grid>

    )
}

export default Footer
