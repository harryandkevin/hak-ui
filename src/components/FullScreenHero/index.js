import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A simple full screen responsive hero banner that centers it's children
 */
export default class FullScreenHero extends Component {
  render () {
    const { children, history } = this.props;

    return (
      <div className='hero'>
        {children}
      </div>
    );
  }
}

FullScreenHero.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}
