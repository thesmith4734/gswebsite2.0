import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';



const useStyles = makeStyles((theme) => ({
    root: {
        height: theme.spacing(4),
        width: '100%'
    },
    divider: {
        background: theme.palette.primary.main
    },
    settings: {
        marginLeft: 0
    }
}));

export default function Introduction() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color="secondary">
                <Toolbar color="secondary">
                    <IconButton>
                        <HomeIcon color="inherit" />
                    </IconButton>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <Typography variant="h8" className={classes.title} >
                        The Programmer
                    </Typography>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <Typography variant="h8" className={classes.title} >
                        The Voice Actor
                    </Typography>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <IconButton className={classes.settings}>
                        <SettingsIcon color="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
