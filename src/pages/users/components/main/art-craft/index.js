import React, { Component } from 'react';
import All from './components/all';
import One from './components/one';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../page-routes';


class ArtCraft extends Component {
  constructor(props){
    super(props);

    this.state = {
    }

  }

  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={ROUTES.artCraft} component={All} />
            <Route path={ROUTES.artCraftParam} component={One} />
          </Switch>
        </Router>
      </div>
    )
  }


}

export default ArtCraft;
