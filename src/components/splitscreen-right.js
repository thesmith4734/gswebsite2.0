import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import voice_img from '../assets/the_voice_actor.jpg';
import { Grid } from '@material-ui/core';


const styles = theme => ({
    rightPane: {
        backgroundColor: '#145aa0',
        width: '50%',
        height: '100%',
        margin: '0',
        padding: '0',
        position: 'relative'
    },
    rightPaneHovered: {
        backgroundColor: '#145aa0',
        width: '50%',
        height: '100%',
        margin: '0',
        padding: '0',
        position: 'relative',
        background: "linear-gradient(to left, #145aa0, #272727);",
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
        color: '#272727',
        bottom: '10%',
        left: '0',
        right:'0',
        margin: 'auto',
        width: '50%',
        borderRadius: '50%',
        fontSize: 'xxx-large'
    }
});

class SplitScreenRight extends Component {
    constructor(props) {
        super(props); 
        this.updateHovered = this.updateHovered.bind(this)
        this.updateNotHovered = this.updateNotHovered.bind(this)
        this.state = {
            leftHover: false
        }
    }

    updateHovered() {
        this.props.onRightHovered()
    }

    updateNotHovered() {
        this.props.onRightNotHovered()
    }

    render() {
        const classes = this.props.classes;
        const isHovered = this.props.leftHover;
        return (
            <Grid
            container
            spacing={0}
            align="center"
            justify="center" 
            direction="column"
            className={isHovered ? classes.rightPaneHovered : classes.rightPane}
            onMouseEnter={this.updateHovered} 
            onMouseLeave={this.updateNotHovered}>
                <Grid item xs={12} align="center" justify="center">
                    <img src={voice_img} alt="A stylish gentleman passionately practicing voice lines into a high quality microphone" className={classes.rightPhoto}/> 
                    <h1 className={classes.rightText}>The Voice Actor</h1>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SplitScreenRight)