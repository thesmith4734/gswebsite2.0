import React from 'react';
import Grid from "@material-ui/core/Grid";
import prog_img from './assets/the_programmer.jpg'
import voice_img from './assets/the_voice_actor.jpg'

export default function TestGrid() {
    return(
        <div className="container">
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} xm={6}>
                    <div className="centered_left">
                        <img src={prog_img} alt="An extremely good looking man sitting in front of a keyboard looking very smart and good at programming"/>
                    </div>
                </Grid>
                <Grid item xs={12} xm={6}>
                    <div className="centered_right">
                        <img src={voice_img} alt="An extremely good looking man sitting in front of a keyboard looking very smart and good at programming"/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
