import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import { Navigation } from './Navigation';
import { Filters } from './Filters';
import { Results } from './Results';

import '../styles/App.css';

console.log('REACT_APP_TEST', process.env)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      app: '',
      credentials: ''
    }    
  }
  
  componentWillMount() {
    this.setState({
      app: process.env.REACT_APP_APPBASE_IO_APP,
      credentials: process.env.REACT_APP_APPBASE_IO_CREDENTIALS
    });
  }

  render() {
    return (
      <div className="container">
        <ReactiveBase 
          app={ this.state.app }
          credentials={ this.state.credentials } 
          type="listing"
          theme={{ primaryColor: '#ff3a4e' }}
          >
          <Navigation/>
          <div className="left-col">
            <Filters/>
          </div>
          <div className="right-col">
            <Results/>
          </div>
        </ReactiveBase>
      </div>      
    );
  }
}
