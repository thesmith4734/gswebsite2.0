import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import web_img from '../assets/website.jpg'


const useStyles = makeStyles((theme) => ({
    background: {
        margin: '0',
        padding: '0',
        width: '100%',
        height: '600px',
        position: 'relative',
    },
    grid: {
        width: '100%',
        marginTop: '10px'
    },
    griditem: {
        width: '100%',
        marginTop: '50px',
        marginBottom: '50px'
    },
    titlecard: {
        width: '60%',
        height: '20%',
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.secondary.main
    },
    showcard: {
        width: '60%',
        backgroundColor: theme.palette.secondary.main,
    },
    cardmedia: {
        height: 0,
        width: '50%',
        paddingTop: '50%', // 16:9
        margin: '10px',
        borderRadius: '10%'
    },
}));

export default function Introduction() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Grid
            container
            direction="column"
            className={classes.grid}>
                <Grid container item xs={12} justify="flex-start" className={classes.griditem}>
                    <Card className={classes.titlecard}>
                        <Typography variant="h2">Projects</Typography>
                    </Card>
                </Grid>
                <Grid container item xs={12} justify="flex-end" className={classes.griditem}>
                    <Card className={classes.showcard}>
                        <Grid  container>
                            <CardMedia image={web_img} className={classes.cardmedia}/>
                            <Typography variant="h2">Project 1</Typography>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
