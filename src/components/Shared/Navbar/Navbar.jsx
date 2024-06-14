"use client";
import { ArrowDropDown } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/images/logos/logo1.png';
import nav1 from '../../../assets/images/shared/nav1.png';
import Button1 from '../Buttons/Button1';
import NavDropDown from './NavDropDown';
import { aboutUsItems, aboutUsbuttons, communityItems, contactUsItems, servicesItems } from './helper';
import styles from './navbar.module.scss';
const Navbar = () => {
  return (
    <Grid className={styles.navbar} container>
      <Grid className='col-center' item md={4} sm={12}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={250} height={63} />
        </Link>
      </Grid>
      <Grid container display={'flex'} flexDirection={'column'} item md={8} sm={12}>
        <Grid className='row-end' item>
          <Button1 onClick={() => alert('Donate Now clicked!')}>Donate Now</Button1>
        </Grid>
        <Grid className='row-center' item>
          <div className={styles.navItems}>
            <div className={styles.navItem}>
              <div className={styles.navLink}>
                About Us
                <ArrowDropDown className={styles.arrow} />
              </div>
              <NavDropDown width={'600px'} image={nav1} items={aboutUsItems} buttons={aboutUsbuttons} />
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>
                Community
                <ArrowDropDown className={styles.arrow} />
              </div>
              <NavDropDown width={'600px'} image={nav1} items={communityItems} />
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>
                Services
                <ArrowDropDown className={styles.arrow} />
              </div>
              <NavDropDown width={'600px'} image={nav1} items={servicesItems} />
            </div>


            <div className={styles.navItem}>
              <div className={styles.navLink}>
                Contact
                <ArrowDropDown className={styles.arrow} />
              </div>
              <NavDropDown width={'600px'} image={nav1} items={contactUsItems} />
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
