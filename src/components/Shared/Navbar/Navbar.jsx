"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import logo from "../../../assets/images/logos/logo1.png";
import about5 from "../../../assets/images/shared/about5.jpg";
import service1 from "../../../assets/images/shared/service1.jpg";
import contact1 from "../../../assets/images/shared/contact1.jpg";
import commun5 from "../../../assets/images/shared/commun5.jpg";
import Button1 from "../Buttons/Button1";
import NavDropDown from "./NavDropDown";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import { aboutUsItems, communityItems, contactUsItems, servicesItems } from "./helper";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    window.open("https://donorchoice.ca/barriemosque", "_blank");
  };

  if (isMobile) {
    return <NavbarMobile handleClick={handleClick} />;
  }

  return (
    <Grid className={styles.navbar} container>
      <Grid className="col-center" item md={4} sm={12}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={250} height={63} />
        </Link>
      </Grid>
      <Grid container alignItems="center" justifyContent="flex-end" item md={8} sm={12}>
        <Grid className="col-center" item>
          <div className={styles.navItems}>
            <div className={styles.navItem}>
              <div className={styles.navLink}>
                About Us
                <ArrowDropDown className={styles.arrow} />
              </div>
              <NavDropDown width="600px" image={about5} items={aboutUsItems} />
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>
                Community
                <ArrowDropDown className={styles.arrow} />
              </div>
              <NavDropDown width="600px" image={commun5} items={communityItems} />
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>
                Services
                <ArrowDropDown className={styles.arrow} />
              </div>
              <NavDropDown width="600px" image={service1} items={servicesItems} />
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>
                Contact
                <ArrowDropDown className={styles.arrow} />
              </div>
              <NavDropDown width="600px" image={contact1} items={contactUsItems} />
            </div>
            <Button1 onClick={handleClick}>Donate Now</Button1>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
