import React, { Component } from 'react';
import All from './components/all';
import One from './components/one';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../page-routes';


class Agric extends Component {
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
            <Route exact path={ROUTES.agric} component={All} />
            <Route path={ROUTES.agricParam} component={One} />
          </Switch>
        </Router>
      </div>
    )
  }


}

export default Agric;
