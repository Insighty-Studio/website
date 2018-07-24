import React, {PureComponent} from 'react';

import './index.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="illustration-section">
        <div className="notebook-illustration">
          <img src={require('./images/notebook.png')} />
        </div>
      </div>
    )
  }
}

export default Illustration;
