import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classOptions } from '../../helpers';

/**
 * Wrapper Component
 */
export default class Wrapper extends Component {
  render () {
    const { children, size, gradient } = this.props;

    const classNames = classOptions({
      'wrapper': true,
      'wrapper--gradient': !!gradient,
      'wrapper--full': size === 'full',
      'wrapper--fluid': size === 'fluid'
    });

    return (
      <div className={classNames}>
        {children}
      </div>
    );
  }
}

Wrapper.defaultProps = {
  size: 'full'
};

Wrapper.propTypes = {
  size: PropTypes.string,
  gradient: PropTypes.bool,
  children: PropTypes.element
};
