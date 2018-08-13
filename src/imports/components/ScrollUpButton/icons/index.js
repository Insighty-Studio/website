/* eslint-disable */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class ScrollUpButtonIcon extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired
  };

  render() {
    const {color} = this.props;

    return (
      <div className="scroll-to-top-btn-icon" style={{backgroundColor: color}}>
        <svg width="14px" height="8px" stroke="none" strokeWidth="1" fill="#FFFFFF" fillRule="evenodd">
          <path d="M7.23076923,0.78359104 C7.47489061,0.776772527 7.72187002,0.86308705 7.91771984,1.04547477 L13.7885455,6.51275841 C14.1938414,6.89019558 14.2266972,7.53613918 13.8619308,7.95551381 C13.4971645,8.37488845 12.8729057,8.40888548 12.4676097,8.03144831 L7.23076923,3.1545717 L1.99392874,8.03144831 C1.5886328,8.40888548 0.964373987,8.37488845 0.599607645,7.95551381 C0.234841304,7.53613918 0.267697031,6.89019558 0.672992966,6.51275841 L6.54381863,1.04547477 C6.73966844,0.86308705 6.98664785,0.776772527 7.23076923,0.78359104 Z" />
        </svg>
      </div>
    );
  }
}
