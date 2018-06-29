import React, {Component} from 'react';
import Scroll from 'react-scroll';
import {ScrollToTopBtn} from 'imports/icons';
import classnames from 'classnames';

import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from './sections/TheProcess';
import Work from './sections/Work';
import ContactUs from './sections/ContactUs';

import './landing.styl';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentHeight: 0,
      windowHeight: 0,
      trackLength: 0,
      throttleScroll: 0,
      percentagesScrolled: 0,
    };
  }

  componentDidMount() {
    this.getDocumentMeasurements();
    window.addEventListener('scroll', () => {
      clearTimeout(this.state.throttleScroll);
      const throttleScroll = setTimeout(() => this.handleScroll(), 50);
      this.setState({throttleScroll});
    });
  }

  getDocumentMeasurements() {
    const documentHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    const windowHeight = window.innerHeight;
    const trackLength = documentHeight - windowHeight;
    this.setState({documentHeight, windowHeight, trackLength});
  }

  handleScroll() {
    const scrollToTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const percentagesScrolled = Math.floor(scrollToTop / this.state.trackLength * 100);
    this.setState({percentagesScrolled});
  }

  renderScrollBtn() {
    return (
      <div
        className={classnames('scroll-btn', this.state.percentagesScrolled >= 17 && 'scroll-btn-visible')}
        onClick={() => Scroll.animateScroll.scrollToTop({smooth: true, duration: 500})}>
        <ScrollToTopBtn />
      </div>
    );
  }

  render() {
    return (
      <div className="landing">
        {this.renderScrollBtn()}
        <Main />
        <Services />
        <TheProcess />
        <Work />
        <ContactUs />
      </div>
    );
  }
}

export default Landing;
