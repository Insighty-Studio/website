/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Scroll from 'react-scroll';
import {ScrollUpBtnIcon} from 'icons';

import './index.styl';

class ScrollUpButton extends PureComponent {
  static propTypes = {
    percentagesScrolled: PropTypes.number
  };

  static defaultProps = {
    percentagesScrolled: 0
  };

  render() {
    const {percentagesScrolled} = this.props;
    return (
      <div
        className={classnames('scroll-up-btn',
          percentagesScrolled >= window.innerHeight && 'scroll-up-btn-visible')}
        onClick={() => Scroll.animateScroll.scrollToTop({smooth: true, duration: 500})}
      >
        <ScrollUpBtnIcon />
      </div>
    );
  }
}

export default ScrollUpButton;
