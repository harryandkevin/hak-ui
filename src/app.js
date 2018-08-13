import React, { Component } from 'react';
import HeroBanner from './components/HeroBanner';
import './styles/main.scss';

// images
import bannerImage from './assets/hak-banner.png';
import logo from './assets/logo.png';

class App extends Component {
  render() {
    return (
      <HeroBanner background={bannerImage}>
        <div className="center">
          <img src={logo} />
          <h1>2 devs / 1 dream</h1>
        </div>
      </HeroBanner>
    );
  }
}

export default App;
