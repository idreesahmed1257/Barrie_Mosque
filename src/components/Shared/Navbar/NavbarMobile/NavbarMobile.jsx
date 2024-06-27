import React, { useState } from 'react';
import { AppBar, Toolbar, Icon, Drawer, List, ListItem, ListItemText, Divider, Collapse } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import Link from 'next/link';
import logo from '../../../../assets/images/logos/logo1.png';
import Image from 'next/image';
import styles from './navbarMobile.module.scss'; // Create this file for custom styles

const NavbarMobile = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({ aboutUs: false, community: false, services: false, contact: false });

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleToggleDropdown = (key) => () => {
        setOpenDropdowns(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return (
        <div>
            <AppBar position="static" className={styles.appBar}>
                <Toolbar>
                    <Icon edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </Icon>
                    <div className={styles.logoContainer}>
                        <Link href="/">
                            <Image src={logo} alt="Logo" width={150} height={38} />
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div className={styles.drawerHeader}>
                    <Icon onClick={toggleDrawer(false)}>
                        <CloseIcon className={styles.close} />
                    </Icon>
                </div>
                <Divider className={styles.drawer} />
                <List className={styles.drawerList}>
                    <ListItem component={Link} href="/">
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem onClick={handleToggleDropdown('aboutUs')}>
                        <ListItemText primary="About Us" />
                        {openDropdowns.aboutUs ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdowns.aboutUs} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem component={Link} className={styles.listItem} href="/about-us/team">
                                <ListItemText primary="Our Team" />
                            </ListItem>
                            <ListItem component={Link} className={styles.listItem} href="/about-us/mission">
                                <ListItemText primary="Our Mission" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem onClick={handleToggleDropdown('community')}>
                        <ListItemText primary="Community" />
                        {openDropdowns.community ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdowns.community} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem component={Link} className={styles.listItem} href="/community/events">
                                <ListItemText primary="Events" />
                            </ListItem>
                            <ListItem component={Link} className={styles.listItem} href="/community/stories">
                                <ListItemText primary="Stories" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem onClick={handleToggleDropdown('services')}>
                        <ListItemText primary="Services" />
                        {openDropdowns.services ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdowns.services} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem component={Link} className={styles.listItem} href="/services/consulting">
                                <ListItemText primary="Consulting" />
                            </ListItem>
                            <ListItem component={Link} className={styles.listItem} href="/services/support">
                                <ListItemText primary="Support" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem onClick={handleToggleDropdown('contact')}>
                        <ListItemText primary="Contact" />
                        {openDropdowns.contact ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdowns.contact} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem component={Link} className={styles.listItem} href="/contact/locations">
                                <ListItemText primary="Locations" />
                            </ListItem>
                            <ListItem component={Link} className={styles.listItem} href="/contact/form">
                                <ListItemText primary="Contact Form" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem component="" onClick={() => alert('Donate Now clicked!')}>
                        <ListItemText primary="Donate Now" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default NavbarMobile;
