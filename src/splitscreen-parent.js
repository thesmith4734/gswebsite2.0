import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import SplitScreenLeft from "./splitscreen-left"
import SplitScreenRight from "./splitscreen-right"

const styles = theme => ({
    root: {
        flex: '1',
        height: '100vh'
    },
    splitScreen: {
        display: 'flex',
        flexGrow: '1',
        flexDirection: 'row',
        margin: '0',
        padding: '0',
        width: '100%',
        height: '100%'
    }
});

class SplitScreenParent extends Component {
    constructor(props) {
        super(props);
        this.handleRightHovered = this.handleRightHovered.bind(this);
        this.handleRightNotHovered = this.handleRightNotHovered.bind(this);
        this.handleLeftHovered = this.handleLeftHovered.bind(this);
        this.handleLeftNotHovered = this.handleLeftNotHovered.bind(this);
        this.state = {rightHover: false, leftHover: false};
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
        const rightHover = this.state.rightHover;
        const leftHover = this.state.leftHover;
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <div className={classes.splitScreen}>
                    <SplitScreenLeft 
                    rightHover = { rightHover }
                    onLeftHovered={this.handleLeftHovered}
                    onLeftNotHovered={this.handleLeftNotHovered}/>
                    <SplitScreenRight 
                    leftHover = { leftHover }
                    onRightHovered={this.handleRightHovered}
                    onRightNotHovered={this.handleRightNotHovered}/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SplitScreenParent);