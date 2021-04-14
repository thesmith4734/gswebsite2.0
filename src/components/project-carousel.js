import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Project from "./project";
import Carousel from 'react-material-ui-carousel';
import Divider from '@material-ui/core/Divider';
import test1 from '../assets/carouseltest2.jpg';
import test2 from '../assets/carouseltest1.png';





const useStyles = makeStyles((theme) => ({
    background: {
        height: '600px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(7)
    },
    carousel: {
        height: '100%',
        width: '60%',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    }

}));

export default function ProjectCarousel(props) {
    const classes = useStyles();
    return (
    <div className={classes.background}>
        <Carousel
            className={classes.carousel}
            autoPlay={false}
            >
            { 
                props.items.map((item, index) => {
                    return <Project item={item} key={index} />
                })
            }
        </Carousel>
        <Divider />
    </div>
    )
}
