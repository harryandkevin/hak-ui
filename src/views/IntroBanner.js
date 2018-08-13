import React, { Component } from 'react';
import HeroBanner from '../components/HeroBanner';
import { BASE_IMAGE_PATH } from '../constants';

const BANNER = BASE_IMAGE_PATH + 'hak-banner.jpg';
const LOGO = BASE_IMAGE_PATH + 'logo.png';

class IntroBanner extends Component {
  render() {
    return (
      <HeroBanner background={BANNER}>
        <div className="center">
          <img src={LOGO} />
          <h1>2 devs / 1 dream</h1>
        </div>
      </HeroBanner>
    );
  }
}

export default IntroBanner;
