import React, { Component } from 'react';
import Clusters from '../Clusters/clusters';
import Websites from '../Websites/websites';
import Navigation from '../Navigation';
import  { FirebaseContext } from '../Firebase';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Websites />
        <Clusters />
        <FirebaseContext.Consumer>
          {firebase => {
            return <div>I've access to Firebase and render something.</div>;
          }}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
