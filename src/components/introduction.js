import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, CardMedia } from '@material-ui/core';
import prog_img from '../assets/the_programmer.jpg'


const useStyles = makeStyles((theme) => ({
    background: {
        margin: '0',
        padding: '0',
        width: '100%',
        height: '10%',
        position: 'relative',
    },
    grid: {
        width: '90%',
        height: '100%',
        margin: '0',
        position: 'relative',
    },
    paper: {
        padding: theme.spacing(2),
        background: theme.palette.secondary.main
    },
    photo: {
        height: '100%',
        width: '100%',
        paddingTop: '75%', // 16:9
        borderRadius: '10%'
    },
    h1: {
        textAlign: "center"
    }
}));

export default function Introduction() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Grid
            container
            spacing={0}
            align = "center"
            justify = "center"
            alignItems = "center"
            className={classes.grid}>
                <Grid item xs={6}>
                    <CardMedia image={prog_img} className={classes.photo}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} className={classes.paper}>
                        <h1 className={classes.h1}>Hello! Welcome to my collection of Projects.</h1>
                        <h2 className={classes.h1}>I am a Python Developer of 3 years with a wide variety of knowledge. From web development to chatbots to various automated scripting, I have hard at work learning how to do anything Python so that you don't have to!</h2>
                    </Paper>
                </Grid>
                
            </Grid>
        </div>
    )
}
