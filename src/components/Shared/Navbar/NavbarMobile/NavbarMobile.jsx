import React, { useState } from 'react';
import { AppBar, Toolbar, Icon, Drawer, List, ListItem, ListItemText, Divider, Collapse } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import Link from 'next/link';
import logo from '../../../../assets/images/logos/logo1.png';
import Image from 'next/image';
import styles from './navbarMobile.module.scss'; // Create this file for custom styles
import { aboutUsItems, communityItems, contactUsItems, servicesItems } from '../helper';

const NavbarMobile = ({ handleClick }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({ aboutUs: false, community: false, services: false, contact: false });

    const toggleDrawer = (open) => () => {
        console.log("dd", open)
        setDrawerOpen(open);
    };

    const handleToggleDropdown = (key) => () => {
        setOpenDropdowns(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
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
                            {aboutUsItems?.map((item, idx) => (
                                <ListItem key={idx} component={Link} className={styles.listItem} href={item?.ref} onClick={handleCloseDrawer}>
                                    <ListItemText primary={item?.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem onClick={handleToggleDropdown('community')}>
                        <ListItemText primary="Community" />
                        {openDropdowns.community ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdowns.community} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {communityItems?.map((item, idx) => (
                                <ListItem key={idx} component={Link} className={styles.listItem} href={item?.ref} onClick={handleCloseDrawer}>
                                    <ListItemText primary={item?.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem onClick={handleToggleDropdown('services')}>
                        <ListItemText primary="Services" />
                        {openDropdowns.services ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdowns.services} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {servicesItems?.map((item, idx) => (
                                <ListItem key={idx} component={Link} className={styles.listItem} href={item?.ref} onClick={handleCloseDrawer}>
                                    <ListItemText primary={item?.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem onClick={handleToggleDropdown('contact')}>
                        <ListItemText primary="Contact" />
                        {openDropdowns.contact ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdowns.contact} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {contactUsItems?.map((item, idx) => (
                                <ListItem key={idx} component={Link} className={styles.listItem} href={item?.ref} onClick={handleCloseDrawer}>
                                    <ListItemText primary={item?.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem component="" onClick={handleClick}>
                        <ListItemText primary="Donate Now" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default NavbarMobile;
