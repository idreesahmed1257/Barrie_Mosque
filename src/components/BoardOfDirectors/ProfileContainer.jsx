import { Grid } from '@mui/material'
import React from 'react'
import { bodItems } from './helper'
import ProfileCard from './ProfileCard'

const ProfileContainer = () => {
    return (
        <Grid container display={'flex'} justifyContent={'center'} spacing={2} px={2} xs={12}>
            {bodItems.map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4} >
                    <ProfileCard image={item?.img} name={item?.name} post={item?.post} />
                </Grid>
            ))}

        </Grid>
    )
}

export default ProfileContainer
