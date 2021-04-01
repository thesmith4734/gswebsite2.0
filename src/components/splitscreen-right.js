import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import voice_img from '../assets/the_voice_actor.jpg';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    rightPane: {
        backgroundColor: theme.palette.primary.main,
        width: '50%',
        height: '100%',
        margin: '0',
        padding: '0',
        position: 'relative'
    },
    rightPaneHovered: {
        backgroundColor: theme.palette.primary.main,
        width: '50%',
        height: '100%',
        margin: '0',
        padding: '0',
        position: 'relative',
        background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main});`,
        cursor: 'pointer'
    },
    rightPhoto: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right:'0',
        margin: 'auto',
        width: '50%',
        borderRadius: '50%'
    },
    rightText: {
        position: 'absolute',
        textAlign: 'center',
        color: theme.palette.text.primary,
        bottom: '10%',
        left: '0',
        right:'0',
        margin: 'auto',
        width: '50%',
        borderRadius: '50%',
        fontSize: 'xxx-large'
    }
}));

export default function SplitscreenRight(props) {
    const classes = useStyles();
    const isHovered = props.leftHover;

    function updateHovered() {
        props.onRightHovered()
    }

    function updateNotHovered() {
        props.onRightNotHovered()
    }

    return (
        <Grid
        container
        spacing={0}
        align="center"
        justify="center" 
        direction="column"
        className={isHovered ? classes.rightPaneHovered : classes.rightPane}
        onMouseEnter={ updateHovered } 
        onMouseLeave={ updateNotHovered }>
            <Grid item xs={12} align="center" justify="center">
                <img src={voice_img} alt="A stylish gentleman passionately practicing voice lines into a high quality microphone" className={classes.rightPhoto}/> 
                <h1 className={classes.rightText}>The Voice Actor</h1>
            </Grid>
        </Grid>
    )
}