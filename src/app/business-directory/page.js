'use client'
import imam from '@/assets/images/shared/Business_DIrectory.jpeg';
import AddBusiness from '@/components/Business/AddBusiness';
import BusinessesTable from '@/components/Business/BusinessesTable';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import "@fontsource/quicksand";
import { Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BusinessDirectory = () => {
    const [business, setBusinesses] = useState([])

    const getBusinesses = async () => {
        try {
            const resp = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-businesses`);

            setBusinesses(resp?.data?.data)
        } catch (err) {
            console.log("Erron in Fetching Businesses", err)
        }
    }

    useEffect(() => {
        getBusinesses()
    }, [])

    return (
        <main>
            {console.log("business", business)}
            <Slide src={imam} heading={"Business Directory"} subheading={"Discover and Connect with Local Muslim Businesses"} />
            <br />
            <HomeTitle text={`Muslim Community Businesses`} />
            <Grid container display={'flex'} justifyContent={'center'} >
                <Grid item xs={12} md={11}>
                    <BusinessesTable businesses={business} />
                </Grid>
            </Grid>
            <HomeTitle text={`Add your business`} />
            <AddBusiness setBusinesses={setBusinesses} />
        </main>
    )
}

export default BusinessDirectory
