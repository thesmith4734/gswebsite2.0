import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Introduction from "./components/introduction";
import ProjectCarousel from "./components/project-carousel";
import Title from "./components/title";
import LinkList from "./components/link-list";
import NavBar from './components/navbar'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '600vh',
        width: '100hh',
        backgroundColor: theme.palette.primary.main,
    }
}));

const projectTitle = {
        title: "Projects",
    }

const linksTitle = {
    title: "Links",
}

export default function ProgrammerPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <Introduction />
            <Divider variant="middle" />
            <Title item={projectTitle}/>
            <ProjectCarousel />
            <Divider variant="middle" />
            <Title item={linksTitle} />
            <LinkList />

        </div>
    )
}
