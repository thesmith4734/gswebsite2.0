import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import prog_img from '../assets/the_programmer.jpg'
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const styles = theme => ({
    leftPane: {
        backgroundColor: '#272727',
        width: '50%',
        height: '100%',
        margin: '0',
        padding: '0',
        position: 'relative'
    },
    leftPaneHovered: {
        backgroundColor: '#272727',
        width: '50%',
        height: '100%',
        margin: '0',
        padding: '0',
        position: 'relative',
        background: "linear-gradient(to right, #272727, #145aa0);",
        cursor: 'pointer'
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
        color: '#145aa0',
        bottom: '10%',
        left: '0',
        right:'0',
        margin: 'auto',
        width: '50%',
        borderRadius: '50%',
        fontSize: 'xxx-large'
    }
});

class SplitScreenLeft extends Component {
    constructor(props) {
        super(props); 
        this.updateHovered = this.updateHovered.bind(this)
        this.updateNotHovered = this.updateNotHovered.bind(this)
        this.state = {
            rightHover: false
        }
    }

    updateHovered() {
        this.props.onLeftHovered()
        console.log("Hovered")
    }

    updateNotHovered() {
        this.props.onLeftNotHovered()
    }

    render() {
        const classes = this.props.classes;
        const isHovered = this.props.rightHover;
        return (
            <Grid
            container
            spacing={0}
            align="center"
            justify="center" 
            direction="column"
            className={isHovered ? classes.leftPaneHovered : classes.leftPane} 
            onMouseEnter={this.updateHovered} 
            onMouseLeave={this.updateNotHovered}>
                <Grid item xs={12} align="center" justify="center">
                    <img src={prog_img} alt="An extremely good looking man sitting in front of a keyboard looking very smart and good at programming" className={classes.leftPhoto}/> 
                    <h1 className={classes.leftText}>The Programmer</h1>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SplitScreenLeft)