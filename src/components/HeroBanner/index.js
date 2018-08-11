import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classOptions } from '../../helpers';

/**
 * A simple full screen responsive hero banner that centers it's children
 */
export default class HeroBanner extends Component {
  render () {
    const { children, size } = this.props;

    const classNames = classOptions({
      'hero': true,
      'hero--full': size === 'full',
      'hero--fluid': size === 'fluid'
    });

    return (
      <div className={classNames}>
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
  children: PropTypes.element
}
