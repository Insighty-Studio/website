import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';
import {Link} from 'react-scroll';
import {Logo} from 'icons';
import {trackEvent} from 'analytics';
import NavigationBar from 'components/NavigationBar';
import Heading from 'components/typography/Heading';
import Paragraph from 'components/typography/Paragraph';
import Button from 'components/interactions/AnimatedButton';

import Illustration from './components/Illustration';
import {ExploreButtonIcon} from './icons';

import './index.styl';
import './mobile/index.styl';

class Header extends Component {
  onClickExplore() {
    trackEvent('Explore clicked');
  }

  render() {
    return (
      <div className="header">
        <NavigationBar
          links={[
            {text: 'Home', to: 'header', active: true},
            {text: 'Services', to: 'services'},
            {text: 'Process', to: 'process'},
            {text: 'Clients', to: 'clients'},
            {text: 'Contact', to: 'contact-us'}
          ]}
          logoIcon={<Logo blue />}
        />
        <div className="content">
          <Parallax
            className="content-info"
            offsetYMax={40}
            offsetYMin={-40}
          >
            <Heading
              subTitle="Insighty Studio"
              title="We Create Web & Mobile Applications That’ll Delight Your Users"
            />
            <Paragraph>
              Insighty is a software development studio with a focus on creating apps that solve
              business problems. We help our clients connect with customers and stand out from
              the chaos of the digital world.
            </Paragraph>
            <Link smooth to="services" duration={700} onClick={() => this.onClickExplore()}>
              <Button title="explore" className="explore-btn" type="button">
                <ExploreButtonIcon />
              </Button>
            </Link>
          </Parallax>
          <Illustration />
        </div>
      </div>
    );
  }
}

export default Header;
