import React, { useState } from 'react';
import { AppBar, Toolbar, Icon, Drawer, List, ListItem, ListItemText, Divider, Collapse } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logos/logo1.png';
import styles from './navbarMobile.module.scss';
import { aboutUsItems, communityItems, contactUsItems, servicesItems } from '../helper';

const NavbarMobile = ({ handleClick }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleToggleDropdown = (key) => () => {
        setOpenDropdowns(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    const renderMenuItems = (items, parentKey = '') => (
        items.map((item, idx) => {
            const itemKey = `${parentKey}-${item.title}`;
            return (
                <div key={itemKey}>
                    <ListItem onClick={item.subMenu ? handleToggleDropdown(itemKey) : toggleDrawer(false)} component={Link} href={item.ref} className={styles.listItem}>
                        <ListItemText primary={item.title} />
                        {item.subMenu && (openDropdowns[itemKey] ? <ExpandLess /> : <ExpandMore />)}
                    </ListItem>
                    {item.subMenu && (
                        <Collapse
                            sx={{ ml: 2, bgcolor: 'rgba(255, 255, 255, 0.1)', borderLeft: '2px solid #54493C', borderRadius: '5px', marginY: 0.5 }}
                            in={openDropdowns[itemKey]}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                {item.subMenu.map((subItem, subIdx) => {
                                    const subItemKey = `${itemKey}-${subItem.title}`;
                                    return subItem?.isExternal || subItem?.ref?.endsWith('.pdf') ? (
                                        <ListItem key={subIdx} component="a" href={subItem.ref} target="_blank" rel="noopener noreferrer" onClick={toggleDrawer(false)} className={styles.listItem}>
                                            <ListItemText primary={subItem.title} />
                                        </ListItem>
                                    ) : (
                                        <ListItem key={subIdx} component={Link} href={subItem.ref} onClick={toggleDrawer(false)} className={styles.listItem}>
                                            <ListItemText primary={subItem.title} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Collapse>

                    )}
                </div>
            );
        })
    );

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
                    <ListItem component={Link} href="/ramadan-calendar-2026" onClick={toggleDrawer(false)}>
                        <ListItemText primary="Ramadan Calendar 2026" />
                    </ListItem>
                    <ListItem onClick={handleToggleDropdown('aboutUs')}>
                        <ListItemText primary="About Us" />
                        {openDropdowns.aboutUs ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                        sx={{ ml: 2, bgcolor: 'rgba(255, 255, 255, 0.03)', borderLeft: '2px solid #C69B47', borderRadius: '5px', marginY: 0.5 }}
                        in={openDropdowns.aboutUs} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {renderMenuItems(aboutUsItems, 'aboutUs')}
                        </List>
                    </Collapse>
                    <ListItem onClick={handleToggleDropdown('community')}>
                        <ListItemText primary="Community" />
                        {openDropdowns.community ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                        sx={{ ml: 2, bgcolor: 'rgba(255, 255, 255, 0.03)', borderLeft: '2px solid #C69B47', borderRadius: '5px', marginY: 0.5 }}
                        in={openDropdowns.community} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {renderMenuItems(communityItems, 'community')}
                        </List>
                    </Collapse>
                    <ListItem onClick={handleToggleDropdown('services')}>
                        <ListItemText primary="Services" />
                        {openDropdowns.services ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                        sx={{ ml: 2, bgcolor: 'rgba(255, 255, 255, 0.03)', borderLeft: '2px solid #C69B47', borderRadius: '5px', marginY: 0.5 }}
                        in={openDropdowns.services} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {renderMenuItems(servicesItems, 'services')}
                        </List>
                    </Collapse>
                    <ListItem onClick={handleToggleDropdown('contact')}>
                        <ListItemText primary="Contact" />
                        {openDropdowns.contact ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                        sx={{ ml: 2, bgcolor: 'rgba(255, 255, 255, 0.03)', borderLeft: '2px solid #C69B47', borderRadius: '5px', marginY: 0.5 }}
                        in={openDropdowns.contact} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {renderMenuItems(contactUsItems, 'contact')}
                        </List>
                    </Collapse>
                    <ListItem component="button" onClick={handleClick}>
                        <ListItemText primary="Donate Now" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default NavbarMobile;
