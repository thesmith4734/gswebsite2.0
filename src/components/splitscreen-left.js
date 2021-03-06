import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import prog_img from '../assets/the_programmer.jpg'
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    leftPane: {
        backgroundColor: theme.palette.secondary.main,
        width: '50%',
        height: '100%',
        margin: '0',
        padding: '0',
        position: 'relative',
        cursor: 'pointer'
    },
    leftPaneHovered: {
        backgroundColor: theme.palette.secondary.main,
        width: '50%',
        height: '100%',
        margin: '0',
        padding: '0',
        position: 'relative',
        background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main});`,
    },
    leftPhoto: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right:'0',
        margin: 'auto',
        width: '50%',
        borderRadius: '50%'
    },
    leftText: {
        position: 'absolute',
        textAlign: 'center',
        color: theme.palette.text.primary,
        bottom: '9%',
        left: '0',
        right:'0',
        margin: 'auto',
        width: '50%',
    }
}));

export default function SplitScreenLeft(props) {
    const classes = useStyles();
    const isHovered = props.rightHover;
    const history = useHistory();

    function updateHovered() {
        props.onLeftHovered()
    }

    function updateNotHovered() {
        props.onLeftNotHovered()
    }

    const handleClick = () => {
        history.push('/the_programmer');
    }

    return (
        <Grid
        container
        spacing={0}
        align="center"
        justify="center" 
        direction="column"
        className={isHovered ? classes.leftPaneHovered : classes.leftPane} 
        onMouseEnter={ updateHovered } 
        onMouseLeave={ updateNotHovered }
        onClick={ handleClick }>
            <Grid container item xs={12} align="center" justify="center">
                <img src={prog_img} alt="An extremely good looking man sitting in front of a keyboard looking very smart and good at programming" className={classes.leftPhoto}/> 
                <Typography variant="h2" className={classes.leftText}>The Programmer</Typography>
            </Grid>
        </Grid>
    )
}
