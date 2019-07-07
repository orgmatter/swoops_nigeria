import React, { Component } from 'react';
import propTypes from 'prop-types';
//import Posts from './components/posts';
import Homepage from '../page/container';
//import Fashion from '../page/fashion/container';
//import Prints from '../page/prints/container';
//import { withRouter } from 'react-router-dom';
//import Header from '../../templates/header';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
    }

  }

  render(){
    return (
      <div>
        <Homepage />
      </div>
    )
  }


}

export default Home;