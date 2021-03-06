import React, {Component} from 'react';
import ManWithLaptop from './icons';
import './index.styl';

class Intro extends Component {
  render() {
    return (
      <div className="intro-section">
        <h1 className="intro-heading">
          Fancy A Free 30-Minute Product Development Session?
        </h1>
        <p className="intro-description">
          Here’s the plan:
          <br />
          - We learn about your idea.
          <br />
          - We outline the community of people that you want to reach with your product.
          <br />
          - You get your idea visualized via mockups a couple of days after.
        </p>
        <div className="illustration">
          <ManWithLaptop />
        </div>
      </div>
    );
  }
}

export default Intro;
