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
    const [loading, setLoading] = useState(true)

    const getBusinesses = async () => {
        try {
            setLoading(true)
            console.log("Fetching businesses...")
            console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL)
            
            // Check if we're in a static export environment
            if (typeof window !== 'undefined' && !process.env.NEXT_PUBLIC_BACKEND_URL) {
                console.log("No backend URL configured for static export")
                setBusinesses([])
                return
            }
            
            const resp = await apiInterceptor.get(`/get-businesses`);
            console.log("API Response:", resp)
            setBusinesses(resp?.data?.data || [])
        } catch (err) {
            console.log("Error in Fetching Businesses", err)
            setBusinesses([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log("Business Directory component mounted")
        getBusinesses()
    }, [])

    return (
        <main>
            <Slide src={imam} heading={"Business Directory"} subheading={"Discover and Connect with Local Muslim Businesses"} />
            <br />
            <HomeTitle text={`Muslim Community Businesses`} />
            <Grid container display={'flex'} justifyContent={'center'} >
                <Grid item xs={12} md={11}>
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            Loading businesses...
                        </div>
                    ) : business.length > 0 ? (
                        <BusinessesTable businesses={business} />
                    ) : (
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <p>No businesses found. Be the first to add your business!</p>
                        </div>
                    )}
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
