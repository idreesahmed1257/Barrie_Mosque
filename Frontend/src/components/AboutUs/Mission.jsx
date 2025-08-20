import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './about.module.scss'
const Mission = ({ content }) => {
    return (
        <Grid container justifyContent={'center'} spacing={2} className={styles.cardContainer}>
            {content.map((objective, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className={styles.card}>
                        <CardContent>
                            <Typography variant="h5" component="div" className={styles.cardTitle}>{objective.title}</Typography>
                            <Typography variant="body2" className={styles.cardContent}>{objective.content}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Mission
