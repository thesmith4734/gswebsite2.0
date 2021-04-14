import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';                        


const useStyles = makeStyles((theme) => ({
    background: {
        margin: '0',
        padding: '0',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    grid: {
        width: '60%',
        height: '100%'
    },
    card: {
        marginBottom: theme.spacing(7),
        marginTop: theme.spacing(7),
        width: '90%',
        height: '600px',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridtext: {
        marginTop: theme.spacing(7),
    },
    inputfield: {
        width: '40%'
    },
    messagefield: {
        width: '100%',
    }
}));

export default function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Card className={classes.card}>
                <Grid  container direction="column" justify="space-evenly" className={classes.grid}>
                    <Grid container item justify="space-evenly">
                        <Typography variant="h5" align="center" paragraph>Feel free to contact me any time by filling out the form bellow or by shooting me an email anytime at: smith.greg473444@gmail.com</Typography>
                    </Grid>
                    <Grid container item justify="space-between">
                        <TextField id="contact-name" label="Name" variant="outlined" className={classes.inputfield}/>
                        <TextField id="contact-email" label="Email Address" variant="outlined" className={classes.inputfield}/>
                    </Grid>
                    <Grid container item>
                        <TextField id="contact-name" label="Message" variant="outlined" multiline rows={8} className={classes.messagefield}/>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}
