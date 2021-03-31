import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Project from "./project";
import Carousel from 'react-material-ui-carousel';
import Divider from '@material-ui/core/Divider';
import test1 from '../assets/carouseltest2.jpg';
import test2 from '../assets/carouseltest1.png';





const useStyles = makeStyles((theme) => ({
    background: {
        height: '550px',
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

const items = [
    {
        title: "Test1",
        description: "describes test 1.",
        image: `${test1}`
    },
    {
        title: "Test2",
        description: "describes test 2.",
        image: `${test2}`
    },
    {
        title: "Test3",
        description: "describes test 3.",
        image: "https://source.unsplash.com/featured/?nature"
    }
]

export default function ProjectCarousel(props) {
    const classes = useStyles();
    return (
    <div className={classes.background}>
        <Carousel
            className={classes.carousel}
            autoPlay={false}
            >
            { 
                items.map((item, index) => {
                    return <Project item={item} key={index} />
                })
            }
        </Carousel>
        <Divider />
    </div>
    )
}
