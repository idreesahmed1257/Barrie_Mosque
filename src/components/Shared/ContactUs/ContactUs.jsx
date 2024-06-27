import React from 'react'
import styles from './contactUs.module.scss';
import { Grid } from '@mui/material';
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
    return (
        <Grid container sx={12}>
            <Grid item sm={12} md={6}>

            </Grid>
            <Grid item sm={12} md={6}>
                <ContactUsForm />
            </Grid>
        </Grid>
    )
}

export default ContactUs
