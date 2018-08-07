import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './styles/web.styl';

class Paragraph extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    animated: PropTypes.bool
  };

  static defaultProps = {
    animated: false
  };

  render() {
    const {children, animated} = this.props;
    return (
      <div
        className="paragraph"
        data-aos={animated && 'fade-up'}
        data-aos-easing={animated && 'ease-out-sine'}
        data-aos-delay={animated && '250'}
      >
        {children}
      </div>
    );
  }
}

export default Paragraph;
