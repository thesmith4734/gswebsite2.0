import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import SplitScreenLeft from "./splitscreen-left";
import SplitScreenRight from "./splitscreen-right";

const useStyles = makeStyles((theme) => ({
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
}));

export default function SplitscreenParent() {
    const classes = useStyles();
    const [rightHover, setRightHover] = useState(false);
    const [leftHover, setLeftHover] = useState(false);

    const handleRightHovered = event => {
        setRightHover(true);
    };

    const handleRightNotHovered = event => {
        setRightHover(false);
    };

    const handleLeftHovered = event => {
        setLeftHover(true);
    };

    const handleLeftNotHovered = event => {
        setLeftHover(false);
    };

    return (
        <div className={classes.root}>
            <div className={classes.splitScreen}>
                <SplitScreenLeft 
                rightHover = { rightHover }
                onLeftHovered={ handleLeftHovered }
                onLeftNotHovered={ handleLeftNotHovered }/>
                <SplitScreenRight 
                leftHover = { leftHover }
                onRightHovered={ handleRightHovered }
                onRightNotHovered={ handleRightNotHovered }/>
            </div>
        </div>
    )
}
