import React, { Component } from 'react';
import { BrowserRouter,
Switch,
Route,
Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import MyTheme from './MyTheme';
import SplitScreenParent from './components/splitscreen-parent';
import ProgrammerPage from './programmer-page';

import './App.css';


class App extends Component {

    render() {
        return (
            <ThemeProvider theme={MyTheme}>
                <main>
                    <Switch>
                        <Route path='/' component={SplitScreenParent} exact />
                        <Route path='/the_programmer' component={ProgrammerPage} />
                        <Route path='/the_voice_actor' component={ProgrammerPage} />
                        <Route path='/linkedin' component={() => {
                            window.location.href = 'https://www.linkedin.com/in/g-b-smith/';
                            return null;
                        }}/>
                        <Route path='/github' component={() => {
                            window.location.href = 'https://github.com/thesmith4734';
                            return null;
                        }}/>
                        <Route path='/upwork' component={() => {
                            window.location.href = 'https://www.upwork.com/freelancers/~01a1448c3d10376900';
                            return null;
                        }}/>
                        <Route component={Error} />
                    </Switch>
                </main>
            </ThemeProvider>
        )
    }
}

export default App;