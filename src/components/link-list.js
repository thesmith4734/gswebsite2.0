import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import RecentActors from '@material-ui/icons/RecentActors'


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
        marginTop: theme.spacing(7),
        width: '100%',
        height: '300px',
        backgroundColor: theme.palette.secondary.main,
        justifyContent: 'center'

    }, 
    griditem: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    largeButton: {
        padding: 12
    },
    largeIcon: {
        fontSize: "10em"
    }
}));

export default function LinkList() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
                <Grid container className={classes.grid}>
                    <Grid container direction="column" item xs={4} className={classes.griditem}>
                        <IconButton className={classes.largeIcon}>
                            <LinkedInIcon color='primary' fontSize='inherit'/>
                        </IconButton>
                        <Typography variant="h5" color='textPrimary'>LinkedIn</Typography>
                    </Grid>
                    <Grid container direction="column" item xs={4} className={classes.griditem}>
                        <IconButton className={classes.largeIcon}>
                            <GitHubIcon color='primary' fontSize='inherit'/>
                        </IconButton>
                        <Typography variant="h5" color='textPrimary'>GitHub</Typography>
                    </Grid>
                    <Grid container direction="column" item xs={4} className={classes.griditem}>
                        <IconButton className={classes.largeIcon}>
                            <RecentActors color='primary' fontSize='inherit'/>
                        </IconButton>
                        <Typography variant="h5" color='textPrimary'>Upwork</Typography>
                    </Grid>
                </Grid>
        </div>
    )
}
