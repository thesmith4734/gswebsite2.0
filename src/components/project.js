import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    showcard: {
        height: '540px',
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
    },
    imgbox: {
        height: '500px',
        width: '500px',
        marginTop: '15px',
        marginBottom: '10px,',
        borderRadius: '10%',
    },
    cardmedia: {
        height: '100%',
        width: '100%',
        borderRadius: '10%',
    },
    gridText: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        padding: theme.spacing(5),
    },
    text: {
        paddingBottom: theme.spacing(5),
    },
    gridimage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
}));

export default function Project(props) {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/github_website')
    }
    return (
    <Card className={classes.showcard}>
        <Grid  container>
            <Grid item xs={6} className={classes.gridimage}>
                <Box boxShadow={4} className={classes.imgbox}>
                    <CardMedia image={props.item.image} className={classes.cardmedia}/>
                </Box>
            </Grid>
            <Grid container direction="column" item xs={6} className={classes.gridText}>
                <Typography variant="h2" gutterBottom className={classes.text}>{props.item.title}</Typography>
                <Typography variant="h5" paragraph gutterBottom className={classes.text}>{props.item.description}</Typography>
                <Button variant="contained" color="primary" onClick={() => window.open(`${props.item.url}`)}>
                    <Typography variant="h5">
                        Go To Repo
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    </Card>
    )
}
