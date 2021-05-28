import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideNav from './Components/Common/SideNav';
import TabBar from './Components/Common/TabBar';
import Navigation from './Components/Common/Navigation';
import Home from './Components/Home/Home';
import MainScreen from './Components/ManagmentTeam.js/MainScreen';

function App () {
    return (

        <>
            <Navigation></Navigation>
            <div className="w-100 d-flex main-block">
                <SideNav></SideNav>
                <div className="flex-grow-1">
                    <TabBar></TabBar>

                    <Router> 
                        <Switch>
                            <Route exact path="/managment" component={MainScreen}></Route>
                            <Route exact path="/" component={Home}></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    )
}

export default App;