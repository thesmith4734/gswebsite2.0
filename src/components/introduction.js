import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import prog_img from '../assets/the_programmer.jpg';


const useStyles = makeStyles((theme) => ({
    background: {
        margin: '0',
        padding: '0',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    grid: {
        width: '100%',
        height: '100%'
    },
    card: {
        marginBottom: theme.spacing(7),
        marginTop: theme.spacing(7),
        width: '90%',
        height: '540px',
        backgroundColor: theme.palette.secondary.main,
    },
    gridimage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    gridtext: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        padding: theme.spacing(3),
    },
    image: {
        backgroundImage: `url(${prog_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.primary.main,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
    },
}));

export default function Introduction() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Card className={classes.card}>
                <Grid  container className={classes.grid}>
                    <Grid item md={6} xs={6} className={classes.gridimage}>
                        <div className={classes.image} />
                    </Grid>
                    <Grid container direction="column" item md={6} xs={6} className={classes.gridtext}>
                        <Typography variant="h1" gutterBottom>Hello!</Typography>
                        <Typography varient="h5" paragraph>Welcome to my collection of projects. I am a Python Developer of 3 years with a wide variety of knowledge. From web development to chatbots to various automated scripting, I am hard at work learning how to do anything Python so that you don't have to.</Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}
