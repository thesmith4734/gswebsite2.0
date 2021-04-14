import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link'



const useStyles = makeStyles((theme) => ({
    root: {
        height: theme.spacing(4),
        width: '100%'
    },
    divider: {
        background: theme.palette.primary.main
    },
    button: {
        width: '100%',
        height: '100%'
    },
    navStyle: {
        textDecoration: 'none'
    },
    navIcon: {
        color: theme.palette.text.primary
    },
    openBar: {
        flexGrow: 1,
    }
}));

export default function Introduction() {
    const classes = useStyles();
    const history = useHistory();

    const handleHome = () => {
        history.push('/');
    }

    const handleSettings = () => {
        console.log('Not Implemented');
    }

    return (
        <div className={classes.root}>
            <AppBar color="secondary">
                <Toolbar color="secondary">
                    <IconButton onClick={ handleHome }>
                        <HomeIcon className={ classes.navIcon } />
                    </IconButton>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <Link component={RouterLink} to="the_programmer" variant="h" color="inherit">The Programmer</Link>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <Link component={RouterLink} to="the_programmer" variant="h" color="inherit">The Voice Actor</Link>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/> 
                    <div className={ classes.openBar } />
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <IconButton className={classes.settings} onClick={ handleSettings }>
                        <SettingsIcon className={ classes.navIcon } />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
