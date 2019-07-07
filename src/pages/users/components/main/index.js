import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import history from '../../../../history';

//import Agric from './agric';
//import ArtCraft from './art-craft';
//import BaleImports from './bale-imports';
//import Electronics from './electronics';
//import Fashion from './fashion';
//import Food from './food';
import Home from './home';
//import InteriorDecor from './interior-decor';
//import Prints from './prints';
//import Properties from './properties';
//import Services from './services';
//import Vehicles from './vehicles';
import Categories from './categories/container';
import Locations from './locations/container';
import Pages from './pages/container';
import PageParam from './page-param/container';
import LocationParam from './location-param/container';

import About from './about-us';
import Contact from './contact-us';
import Advertise from './advertise';
import Promote from './promote';
import Privacy from './privacy';
import Terms from './terms';
import Write from './write-us';

import { Routes as ROUTES } from '../../../../page-routes';
//import Header from '../templates/header';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className='flex-container'>
                <div className='fx-item'></div>
                <div className='fx-item fx-post-item'>
                <Router history={history}>
                    <Switch>
                        <Route exact path={ROUTES.home} component={props => <Home {...props} />} />
                        <Route exact path={ROUTES.pages} component={props => <Pages {...props} />} />
                        <Route exact path={ROUTES.categories} component={props => <Categories {...props} />} />
                        <Route exact path={ROUTES.locations} component={props => <Locations {...props} />} />
                        <Route exact path={ROUTES.pageParam} component={props => <PageParam {...props} />} />
                        <Route exact path={ROUTES.locationParam} component={props => <LocationParam {...props} />} />
                        <Route exact path={ROUTES.about} component={props => <About {...props} />} />
                        <Route exact path={ROUTES.contact} component={props => <Contact {...props} />} />
                        <Route exact path={ROUTES.advertise} component={props => <Advertise {...props} />} />
                        <Route exact path={ROUTES.promote} component={props => <Promote {...props} />} />
                        <Route exact path={ROUTES.privacy} component={props => <Privacy {...props} />} />
                        <Route exact path={ROUTES.terms} component={props => <Terms {...props} />} />
                        <Route exact path={ROUTES.write} component={props => <Write {...props} />} />
                    </Switch>
                </Router>
                </div>
                <div className='fx-item'></div>
            </div>
        )
    }
}

export default Main;