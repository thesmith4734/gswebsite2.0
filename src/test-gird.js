import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import prog_img from './assets/the_programmer.jpg'
import voice_img from './assets/the_voice_actor.jpg'

class TestGrid extends Component {
    render() {
        return (
            <div className="index_container">
                <Grid container>
                    <Grid item xs={6}>
                        <div className="centered_left" justify="space-evenly" alignItems="center">
                            <img src={prog_img} alt="An extremely good looking man sitting in front of a keyboard looking very smart and good at programming"/>
                            <p>The Programmer</p>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="centered_right">
                            <img src={voice_img} alt="An extremely good looking man passionatly and animatedly speaking voice lines into a mic"/>
                            <h1>The Voice Actor</h1>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const styles = theme => ({
    container: {
        width: '800px'
    }
})
export default withStyles(styles)(TestGrid)