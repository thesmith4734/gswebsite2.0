import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import RecentActors from '@material-ui/icons/RecentActors'


const useStyles = makeStyles((theme) => ({
    background: {
        marginBottom: theme.spacing(7),
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
        alignItems: 'center',
    },
    buttonContainer: {
        width: '50%',
        hieght: '50%',
    },
    largeButton: {
        padding: 12,
        width: '50%'
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
                    <div className={classes.buttonContainer}>
                            <IconButton className={classes.largeIcon} onClick={() => window.open('https://www.linkedin.com/in/g-b-smith/')}>
                                <LinkedInIcon color='primary' fontSize='inherit'/>
                            </IconButton>
                            <Typography variant="h5" color='textPrimary'>LinkedIn</Typography>
                        </div>
                    </Grid>
                    <Grid container direction="column" item xs={4} className={classes.griditem}>
                        <div className={classes.buttonContainer}>
                            <IconButton className={classes.largeIcon} onClick={() => window.open('https://github.com/thesmith4734')}>
                                <GitHubIcon color='primary' fontSize='inherit'/>
                            </IconButton>
                            <Typography variant="h5" color='textPrimary'>GitHub</Typography>
                        </div>
                    </Grid>
                    <Grid container direction="column" item xs={4} className={classes.griditem}>
                        <div className={classes.buttonContainer}>
                                <IconButton className={classes.largeIcon} onClick={() => window.open('https://www.upwork.com/freelancers/~01a1448c3d10376900')}>
                                    <RecentActors color='primary' fontSize='inherit'/>
                                </IconButton>
                            <Typography variant="h5" color='textPrimary'>Upwork</Typography>
                        </div>
                    </Grid>
                </Grid>
        </div>
    )
}
