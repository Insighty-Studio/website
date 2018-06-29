import React, {Component} from 'react';
import Logo from './components/Logo';
import Description from './components/Description';
import NavigationBar from './components/NavigationBar';

import './main-section.styl';

class Main extends Component {
  render() {
    return (
      <div className="main" style={this.props.style}>
        <NavigationBar />
        <Logo desc="We Create Web & Mobile Applications That’ll Delight Your Users" />
        <Description
          title="Insighty"
          text=" is a software development studio with a focus on creating apps that solve business problems.
          We help our clients connect with customers and stand out from the chaos of the digital world."
        />
      </div>
    );
  }
}

export default Main;
