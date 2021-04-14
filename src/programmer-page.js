import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Introduction from "./components/introduction";
import ProjectCarousel from "./components/project-carousel";
import Title from "./components/title";
import LinkList from "./components/link-list";
import NavBar from './components/navbar';
import websiteImg from './assets/website.png';
import westernbotImg from './assets/westernbot.png';
import Contact from './components/contact'



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100hh',
        backgroundColor: theme.palette.primary.main,
    },
}));

const projectTitle = {
        title: "Projects",
    }

const linksTitle = {
    title: "Links",
}

const contactTitle = {
    title: "Contact Me",
}

const projects = [
    {
        title: "Resume Website",
        description: "My website has been built with a React frontend and a Flask backend. The frontend utilizes the Material UI framework on top of the Javascript React Library. The backend is built out using the Python Flask library.",
        image: `${websiteImg}`,
        url: 'https://github.com/thesmith4734/gswebsite2.0'
    },
    {
        title: "Western Bot",
        description: "In my spare time I've started developoing a fun Discord bot to use on a smaller server with friends. So far the bot can disconnect people from voice channels if you 'shoot' them. You can also duel one another in a chat based mini game that will disconnect the loser from the voice channel. I plan on adding many more small but fun features.",
        image: `${westernbotImg}`,
        url: 'https://github.com/thesmith4734/westernbot'
    },
]

export default function ProgrammerPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <Introduction />
            <Divider variant="middle" />
            <Title item={projectTitle}/>
            <ProjectCarousel items={projects}/>
            <Divider variant="middle" />
            <Title item={linksTitle} />
            <LinkList />
            <Divider variant="middle" />
            <Title item={contactTitle} />
            <Contact />
        </div>
    )
}
