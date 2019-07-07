import React, { Component } from 'react';

class Footer extends Component {
  constructor(){
    super();

    this.state = {
      projects: []
    }

  }

  render(){
    return(
      <div style={{fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center', color: '#343e41', paddingTop: '2px', paddingBottom: '0px'}}>
          &copy; Copyright Swoops 2018
      </div>
    )
  }


}

export default Footer;