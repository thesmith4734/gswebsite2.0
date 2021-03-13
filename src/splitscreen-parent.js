import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SplitScreenLeft from './splitscreen-left';
import SplitScreenRight from './splitscreen-right';

const styles = theme => ({
    splitScreen: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        height: '100%'
    }
});

class SplitScreenParent extends Component {
    constructor(props) {
        super(props);
        this.handleLeftTextChange = this.handleLeftTextChange.bind(this);
        this.handleRightTextChange = this.handleRightTextChange.bind(this);
        this.handleRightHovered = this.handleRightHovered.bind(this);
        this.handleRightNotHovered = this.handleRightNotHovered.bind(this);
        this.handleLeftHovered = this.handleLeftHovered.bind(this);
        this.handleLeftNotHovered = this.handleLeftNotHovered.bind(this);
        this.state = {text: 'Initial', rightHover: false, leftHover: false};
    }

    handleLeftTextChange(text) {
        this.setState({leftText: text})
    }

    handleRightTextChange(text) {
        this.setState({rightText: text})
    }

    handleRightHovered() {
        this.setState({rightHover: true})
    }

    handleRightNotHovered() {
        this.setState({rightHover: false})
    }

    handleLeftHovered() {
        this.setState({leftHover: true})
    }

    handleLeftNotHovered() {
        this.setState({leftHover: false})
    }


    render() {
        const leftText = this.state.leftText;
        const rightText = this.state.rightText;
        const rightHover = this.state.rightHover;
        const leftHover = this.state.leftHover;
        const classes = this.props.classes;
        return (
            <div className={classes.splitScreen}>
                <SplitScreenLeft 
                leftText = { leftText }
                rightHover = { rightHover }
                onRightTextChange={this.handleRightTextChange}
                onLeftHovered={this.handleLeftHovered}
                onLeftNotHovered={this.handleLeftNotHovered}/>
                <SplitScreenRight 
                rightText = { rightText }
                leftHover = { leftHover }
                onLeftTextChange={this.handleLeftTextChange}
                onRightHovered={this.handleRightHovered}
                onRightNotHovered={this.handleRightNotHovered}/>
            </div>
        )
    }
}

export default withStyles(styles)(SplitScreenParent);