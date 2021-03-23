import React, { Component } from 'react';
import { BrowserRouter,
Switch,
Route,
Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import MyTheme from './MyTheme';
import SplitScreenParent from './splitscreen-parent';
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
                        <Route component={Error} />
                    </Switch>
                </main>
            </ThemeProvider>
        )
    }
}

export default App;