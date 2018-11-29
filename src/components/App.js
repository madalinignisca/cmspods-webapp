import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Clusters from './Clusters/clusters';
import Websites from './Websites/websites';
import Navigation from './Navigation';

library.add(fab, far, fas);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Websites />
        <Clusters />
      </div>
    );
  }
}
