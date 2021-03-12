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
    constructor () {
        super()

        this.state = {
            hover: false,
            text: "Initial Text"
        }

        this.updateText1 = this.updateText1
    }
    updateText1 = (text) => {this.setState({ text})}
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.splitScreen}>
                <p>{this.state.text}</p>
                <SplitScreenLeft updateTextCB={this.updateText1} />
            </div>
        )
    }
}

export default withStyles(styles)(SplitScreenParent);