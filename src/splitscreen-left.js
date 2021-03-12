import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import prog_img from './assets/the_programmer.jpg'

const styles = theme => ({
    leftPane: {
        backgroundColor: '#272727',
        width: '50%',
        height: '100%'
    },
    leftPaneCentered: {
        textAlign: 'center',
        color: '#145aa0',
        fontSize: 'xxx-large'
    },
    leftPhoto: {
        height: '50%',
        width: '50%',
        borderRadius: '50%'
    }
});

class SplitScreenLeft extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.leftPane}>
                <div className={classes.leftPaneCentered}>
                    <img src={prog_img} alt="An extremely good looking man sitting in front of a keyboard looking very smart and good at programming" className={classes.leftPhoto}/>
                    <p>The Programmer</p>
                    <input type="text" placeholder="Write text" onChange={(e) => this.props.updateTextCB(e.target.value)} />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SplitScreenLeft)