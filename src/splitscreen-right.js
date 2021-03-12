import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import voice_img from './assets/the_voice_actor.jpg'

const styles = theme => ({
    rightPane: {
        backgroundColor: '#145aa0',
        width: '50%'
    },
    rightPaneCentered: {
        textAlign: 'center',
        color: '#272727',
        fontSize: 'xxx-large'
    },
    rightPhoto: {
        height: '50%',
        width: '50%',
        borderRadius: '50%'
    }
});

class SplitScreenRight extends Component {
    render() {
        const classes = this.props.classes;
        const { hovered } = this.state;
        const hovered_style = hovered ? {
            backgroundColor: '#145aa0',
            width: '50%',
            background: 'linear-gradient(to right bottom, #272727, #145aa0)'
        } : {};

        return (
            <div className={classes.rightPane} style={hovered_style}>
                <div className={classes.rightPaneCentered}>
                    <img src={voice_img} alt="An stylish gentleman passionately practicing voice lines into a high quality microphone" className={classes.rightPhoto}/>
                    <p>The Voice Actor</p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SplitScreenRight)