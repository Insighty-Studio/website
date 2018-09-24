import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {
  Logo,
  AngelListIcon,
  BloggerIcon,
  ClutchIcon,
  LinkedInIcon,
  FacebookIcon,
} from 'icons';

import Button from 'components/interactions/Button';

import './index.styl';
import './mobile/index.styl';

class Footer extends PureComponent {
  renderLinks() {
    const links = [
      {text: 'Home', to: 'home'},
      {text: 'Services', to: 'services'},
      {text: 'Impact', to: 'impact'},
      {text: 'Case Studies', to: 'case-studies'},
      {text: 'Team', to: 'team'},
    ];

    return (
      <div className="links">
        {links.map(({text, to}, i) => (
          <Link
            key={i}
            to={to}
          >
            {text}
          </Link>
        ))}
      </div>
    );
  }

  renderSocials() {
    return (
      <div className="socials">
        <FacebookIcon />
        <LinkedInIcon />
        <BloggerIcon />
        <ClutchIcon />
        <AngelListIcon />
      </div>
    );
  }

  render() {
    return (
      <div className="footer">
        <div className="menu">
          <Logo className="logo" color="white" />
          {this.renderLinks()}
          <Link to="consult"><Button className="header-button">FREE CONSULTATION</Button></Link>
          {this.renderSocials()}
        </div>
        <div className="details">
          <div className="rights">© 2018 Insighty All Rights Reserved</div>
          <div className="info">
            <a href="mailto:hello@insighty.studio">hello@insighty.studio</a>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.ca/maps/place/240+Richmond+St+W,+Toronto,+ON+M5V+2C5/@43.6479848,-79.4174159,13z"
            >
              240 Richmond St W, Toronto, ON M5V 1V6
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
