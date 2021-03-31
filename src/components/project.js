import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import web_img from '../assets/website.jpg';

const useStyles = makeStyles((theme) => ({
    showcard: {
        height: '520px',
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
    },
    cardmedia: {
        height: '500px',
        width: '500px',
        marginTop: '10px',
        marginBottom: '10px,',
        borderRadius: '10%',
    },
    gridText: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
    },
    gridimage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
}));

export default function Project(props) {
    const classes = useStyles();
    return (
    <Card className={classes.showcard}>
        <Grid  container>
            <Grid item xs={6} className={classes.gridimage}>
                <CardMedia image={props.item.image} className={classes.cardmedia}/>
            </Grid>
            <Grid item xs={6} className={classes.gridText}>
                <Typography variant="h2" gutterBottom>{props.item.title}</Typography>
                <Typography variant="h5" paragraph m={3}>{props.item.description}</Typography>
            </Grid>
        </Grid>
    </Card>
    )
}
