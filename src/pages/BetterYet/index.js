import React, {PureComponent} from 'react';
import BodyBackground from 'components/BodyBackground';

import Header from './sections/Header';
import About from './sections/About';
import Prototypes from './sections/Prototypes';
import Fonts from './sections/Fonts';
import Colors from './sections/Colors';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
import Illustration from './sections/Illustration';

import './index.styl';

class BetterYet extends PureComponent {
  renderTopPrototypes() {
    return (
      <Prototypes
        prototypes={[
          {src: require('./images/image1.png')},
          {src: require('./images/image2.png')},
          {src: require('./images/image3.png')},
        ]}
      />
    );
  }

  renderBottomPrototypes() {
    return (
      <Prototypes
        prototypes={[
          {src: require('./images/image4.png')},
          {src: require('./images/image5.png')},
          {src: require('./images/image6.png')},
        ]}
      />
    );
  }

  render() {
    return (
      <div className="betteryet-page">
        <BodyBackground color="#9FC6E2" />
        <Header />
        <About />
        {this.renderTopPrototypes()}
        <Fonts />
        {this.renderBottomPrototypes()}
        <Colors />
        <Illustration />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default BetterYet;
