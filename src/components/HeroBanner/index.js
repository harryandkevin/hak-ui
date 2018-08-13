import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classOptions } from '../../helpers';

/**
 * A simple full screen responsive hero banner that centers it's children
 */
export default class HeroBanner extends Component {
  render () {
    const { children, size, background } = this.props;

    const classNames = classOptions({
      'hero-banner': true,
      'hero-banner--full': size === 'full',
      'hero-banner--fluid': size === 'fluid'
    });

    const style = {
      backgroundImage: `url(${background})`
    }

    return (
      <div className={classNames} style={style}>
        {children}
      </div>
    );
  }
}

HeroBanner.defaultProps = {
  size: 'full'
}

HeroBanner.propTypes = {
  size: PropTypes.string,
  background: PropTypes.string.isRequired,
  children: PropTypes.element
}
