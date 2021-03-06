import React, {Component} from 'react';
import Impact from 'icons/backgrounds/ImpactBG';
import './index.styl';

class Intro extends Component {
  render() {
    return (
      <div className="intro-section">
        <h1 className="intro-heading">
          Profits Paired With Purpose
        </h1>
        <p className="intro-description-first">
          For any commercial project that you do with us, we build a mobile app for an
          entrepreneur with a socially impactful cause. Pro bono.
        </p>
        <p className="intro-description-second">
          {`We call people that envision a better tomorrow 'heros'.
          Whether you're a hero that can afford our services or not, we want to know you.`}
        </p>
        <div className="illustration">
          <Impact />
        </div>
      </div>
    );
  }
}

export default Intro;
