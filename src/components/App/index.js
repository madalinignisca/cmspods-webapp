import React from 'react';
import { BrowserRouter as Router } from  'react-router-dom';
import  { FirebaseContext } from '../Firebase';
import Navigation from '../Navigation';

const App = () => (
  // <FirebaseContext.Consumer>
    <Router>
      <Navigation />
    </Router>
    // {firebase => {
    //   return <div>I've access to Firebase and render something.</div>;
    // }}
  // </FirebaseContext.Consumer>
);

export default App;