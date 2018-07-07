import React, {Component} from 'react';
import ScrollToTopBtn from 'imports/components/ScrollToTopBtn';
import provideScrollPosition from 'react-provide-scroll-position';

import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from './sections/TheProcess';
import Work from './sections/Work';
import ContactUs from './sections/ContactUs';

import './styles/landing';

const LandingPage = ({scrollTop}) => (
  <div className="landing">
    <ScrollToTopBtn percentagesScrolled={scrollTop} />
    <Main />
    <Services />
    <TheProcess />
    <Work />
    <ContactUs />
  </div>
);

const LandingScroll = provideScrollPosition(LandingPage);

class Landing extends Component {
  render() {
    return <LandingScroll />;
  }
}

export default Landing;
