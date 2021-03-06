import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';
import './mobile/index.styl';

class WhitePaper extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: ''
  };

  render() {
    const {children} = this.props;

    return (
      <div className="white-paper">
        <div className="paper-width">
          {children}
        </div>
      </div>
    );
  }
}

export default WhitePaper;
