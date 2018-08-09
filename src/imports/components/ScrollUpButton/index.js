import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Scroll from 'react-scroll';

import {ScrollUpButtonIcon} from './icons';

import './index.styl';

class ScrollUpButton extends PureComponent {
  static propTypes = {
    percentagesScrolled: PropTypes.number,
    color: PropTypes.string,
  };

  static defaultProps = {
    percentagesScrolled: 0,
    color: '#005EFF'
  };

  render() {
    const {color, percentagesScrolled} = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className={classnames('scroll-up-btn',
          percentagesScrolled >= window.innerHeight && 'scroll-up-btn-visible')}
        onClick={() => Scroll.animateScroll.scrollToTop({smooth: true, duration: 500})}
      >
        <ScrollUpButtonIcon color={color} />
      </div>
    );
  }
}

export default ScrollUpButton;
