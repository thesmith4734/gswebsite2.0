import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    background: {
        margin: '0',
        padding: '0',
        width: '100%',
        position: 'relative',
    },
    titlecard: {
        width: '60%',
        height: '20%',
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.secondary.main
    },
}));

export default function Title(props) {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Card className={classes.titlecard}>
                <Typography variant="h2">{props.item.title}</Typography>
            </Card>
        </div>
    )
}
