import React, { Component } from 'react';
import Home from './pages/users';
import Admin from './pages/admin';
import Agric from './pages/users';
import ArtCraft from './pages/users';
import BaleImports from './pages/users';
import Electronics from './pages/users';
import Fashion from './pages/users';
import Food from './pages/users';
import InteriorDecor from './pages/users';
import Prints from './pages/users';
import Properties from './pages/users';
import Services from './pages/users';
import Vehicles from './pages/users';
import Categories from './pages/users';
import Locations from './pages/users';
import Pages from './pages/users';
import PageParam from './pages/users';
import LocationParam from './pages/users';

import About from './pages/users';
import Contact from './pages/users';
import Advertise from './pages/users';
import Promote from './pages/users';
import Privacy from './pages/users';
import Terms from './pages/users';
import Write from './pages/users';

//import Header from './pages/users/components/templates/header';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Routes as ROUTES } from './page-routes';
import history from './history';


class App extends Component {

  render(){
    return(
      <div className='container'>
        <Router history={history}>
          <Switch>
            <Route path={ROUTES.admin} component={Admin} />
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
    )
  }


}

export default App;
