import React, {PureComponent} from 'react';
import BodyBackground from 'components/BodyBackground';
import {lpmaDarkGray} from 'styles/config';

import Header from './sections/Header';
import About from './sections/About';
import Fonts from './sections/Fonts';
import Illustrations from './sections/Illustrations';
import Colors from './sections/Colors';
import Screens from './sections/Screens';
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import './index.styl';

class LPMA extends PureComponent {
  render() {
    return (
      <div className="lpma-page">
        <BodyBackground color={lpmaDarkGray} />
        <Header />
        <About />
        <Fonts />
        <Illustrations />
        <Colors />
        <Screens />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default LPMA;
