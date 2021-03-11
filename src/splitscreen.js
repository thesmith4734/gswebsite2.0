import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box'
import prog_img from './assets/the_programmer.jpg'
import voice_img from './assets/the_voice_actor.jpg'

const styles = theme => ({
    splitScreen: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        height: '100%'
    },
    leftPane: {
        backgroundColor: '#272727',
        width: '50%',
        height: '100%'
    },
    rightPane: {
        backgroundColor: '#145aa0',
        width: '50%'
    },
    leftPaneCentered: {
        textAlign: 'center',
        color: '#145aa0',
        fontSize: 'xxx-large'
    },
    rightPaneCentered: {
        textAlign: 'center',
        color: '#272727',
        fontSize: 'xxx-large'
    },
    leftPhoto: {
        height: '50%',
        width: '50%',
        borderRadius: '50%'
    },
    rightPhoto: {
        height: '50%',
        width: '50%',
        borderRadius: '50%'

    }
});

class SplitTheScreen extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.splitScreen}>
                <div className={classes.leftPane}>
                    <div className={classes.leftPaneCentered}>
                        <img src={prog_img} alt="An extremely good looking man sitting in front of a keyboard looking very smart and good at programming" className={classes.leftPhoto}/>
                        <p>The Programmer</p>
                    </div>
                </div>
                <div className={classes.rightPane}>
                    <div className={classes.rightPaneCentered}>
                    <img src={voice_img} alt="An stylish gentleman passionately practicing voice lines into a high quality microphone" className={classes.rightPhoto}/>
                        <p>The Voice Actor</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SplitTheScreen)