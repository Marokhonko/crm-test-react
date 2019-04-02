import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pageas/dashboard/dashboard";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";




class Routers extends Component {
    render() {
        return (
            <div className="routs">
                <BrowserRouter>
                    <div className="router">
                        <Header />
                        <Sidebar />
                        <Switch>
                            <Route path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routers;
