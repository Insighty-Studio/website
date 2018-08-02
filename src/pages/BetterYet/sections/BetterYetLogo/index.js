import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import {Background, AboutLogo} from './icons';
import './index.styl';

class BetterYetLogo extends PureComponent {
  render() {
    return (
      <div className="logo-section">
        <Parallax
          offsetYMax={80}
          offsetYMin={-40}
        >
          <AboutLogo />
        </Parallax>
        <div className="logo-bg">
          <Background />
        </div>
      </div>
    );
  }
}

export default BetterYetLogo;
