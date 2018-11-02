import React, { Component } from 'react';
// import logo from './logo.svg';

import Routes from './components/routes';
import Nav from './components/nav';
import Footer from './components/footer';

class App extends Component {


  render() {
    return (
      <div>
        <Nav />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
