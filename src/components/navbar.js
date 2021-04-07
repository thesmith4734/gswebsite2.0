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
import { useHistory } from 'react-router-dom';



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
    },
    button: {
        width: '100%',
        height: '100%'
    }
}));

export default function Introduction() {
    const classes = useStyles();
    const history = useHistory();

    const handleHome = () => {
        history.push('/');
    }

    const handleProg = () => {
        history.push('/the_programmer');
    }

    const handleVoice = () => {
        console.log('Not Implemented')
    }

    const handleSettings = () => {
        console.log('Not Implemented');
    }

    return (
        <div className={classes.root}>
            <AppBar color="secondary">
                <Toolbar color="secondary">
                    <IconButton onClick={ handleHome }>
                        <HomeIcon color="inherit" />
                    </IconButton>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <ButtonBase onClick={ handleProg }>
                        <Typography variant="h8" className={classes.title}>
                            The Programmer
                        </Typography>
                    </ButtonBase>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <ButtonBase onClick={ handleVoice }>
                        <Typography variant="h8" className={classes.title} onClick={ handleVoice }>
                            The Voice Actor
                        </Typography>
                    </ButtonBase>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <IconButton className={classes.settings} onClick={ handleSettings }>
                        <SettingsIcon color="inherit" />
                    </IconButton>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                </Toolbar>
            </AppBar>
        </div>
    )
}
