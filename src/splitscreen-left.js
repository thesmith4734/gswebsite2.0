import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import prog_img from './assets/the_programmer.jpg'

const styles = theme => ({
    leftPane: {
        backgroundColor: '#272727',
        width: '50%',
        heigt: '100%'
    },
    leftPaneHovered: {
        backgroundColor: '#272727',
        width: '50%',
        cursor: 'pointer',
        background: "linear-gradient(to right, #272727, #145aa0);"
    },
    leftPaneCentered: {
        position: 'absolute',
        right: '50%',
        textAlign: 'center',
        color: '#145aa0',
        fontSize: 'xxx-large'
    },
    leftPhoto: {
        width: '50%',
        borderRadius: '50%'
    }
});

class SplitScreenLeft extends Component {
    constructor(props) {
        super(props); 
        this.updateRightText = this.updateRightText.bind(this);
        this.updateHovered = this.updateHovered.bind(this)
        this.updateNotHovered = this.updateNotHovered.bind(this)
        this.state = {
            rightHover: false
        }
    }

    updateRightText(e) {
        this.props.onRightTextChange(e.target.value);
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
        const leftText = this.props.leftText;
        const isHovered = this.props.rightHover;
        return (
            <div className={isHovered ? classes.leftPaneHovered : classes.leftPane} onMouseEnter={this.updateHovered} onMouseLeave={this.updateNotHovered}>
                <div className={classes.leftPaneCentered}>
                    <img src={prog_img} alt="An extremely good looking man sitting in front of a keyboard looking very smart and good at programming" className={classes.leftPhoto}/>
                    <p>{ leftText }</p>
                    <input type="text" placeholder="Write text" onChange={this.updateRightText} />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SplitScreenLeft)