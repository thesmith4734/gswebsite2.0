import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import voice_img from './assets/the_voice_actor.jpg';

const styles = theme => ({
    rightPane: {
        backgroundColor: '#145aa0',
        width: '50%',
    },
    rightPaneHovered: {
        backgroundColor: '#145aa0',
        width: '50%',
        background: "linear-gradient(to left, #145aa0, #272727);",
        cursor: 'pointer'
    },
    rightPaneCentered: {
        textAlign: 'center',
        color: '#272727',
        fontSize: '1.2rem'
    },
    rightPhoto: {
        height: '50%',
        width: '50%',
        borderRadius: '50%'
    }
});

class SplitScreenRight extends Component {
    constructor(props) {
        super(props); 
        this.updateLeftText = this.updateLeftText.bind(this)
        this.updateHovered = this.updateHovered.bind(this)
        this.updateNotHovered = this.updateNotHovered.bind(this)
        this.state = {
            leftHover: false
        }
    }

    updateLeftText(e) {
        this.props.onLeftTextChange(e.target.value);
    }

    updateHovered() {
        this.props.onRightHovered()
    }

    updateNotHovered() {
        this.props.onRightNotHovered()
    }

    render() {
        const classes = this.props.classes;
        const rightText = this.props.rightText;
        const isHovered = this.props.leftHover

        return (
            <div className={isHovered ? classes.rightPaneHovered : classes.rightPane} onMouseEnter={this.updateHovered} onMouseLeave={this.updateNotHovered}>
                <div className={classes.rightPaneCentered}>
                    <img src={voice_img} alt="An stylish gentleman passionately practicing voice lines into a high quality microphone" className={classes.rightPhoto}/>
                    <p>{ rightText }</p>
                    <input type="text" placeholder="Write text" onChange={this.updateLeftText} />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SplitScreenRight)