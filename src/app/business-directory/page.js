'use client'
import imam from '@/assets/images/shared/Business_DIrectory.jpeg';
import AddBusiness from '@/components/Business/AddBusiness';
import BusinessesTable from '@/components/Business/BusinessesTable';
import Slide from '@/components/Home/HomeSlide';
import HomeTitle from '@/components/Home/HomeTitle';
import apiInterceptor from '@/lib/api';
import "@fontsource/quicksand";
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const BusinessDirectory = () => {
    const [business, setBusinesses] = useState([])

    const getBusinesses = async () => {
        try {
            const resp = await apiInterceptor.get(`/get-businesses`);

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
            <br />
            <br />
        </main>
    )
}

export default BusinessDirectory
