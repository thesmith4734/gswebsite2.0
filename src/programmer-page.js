import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Introduction from "./components/introduction";
import Projects from "./components/projects";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '600vh',
        width: '100hh',
        backgroundColor: theme.palette.primary.main,
    }
}));

export default function ProgrammerPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Introduction />
            <Divider variant="middle" />
            <Projects />
        </div>
    )
}
