/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  LinkedInIcon,
  FacebookIcon,
  ClutchIcon,
  AngelListIcon,
  BloggerIcon
} from 'icons';

import {
  MenuIcon,
  CloseMenuIcon
} from './icons';
import './index.styl';
import './mobile/index.styl';

class NavigationBar extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.object),
    logoIcon: PropTypes.element.isRequired,
    white: PropTypes.bool
  };

  static defaultProps = {
    links: null,
    white: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isMenuStatus: ''
    };
  }

  clearMenuStatus(i, duration) {
    if (i === 0) this.setState({isMenuStatus: ''});
    setTimeout(() => this.setState({isMenuStatus: ''}), duration);
  }

  renderLinks() {
    const {links, white} = this.props;
    if (!links) return null;
    return (
      <div className="links">
        {links.map(({
          text, to, href, active
        }, i) => {
          const duration = 500 + (i * 200);
          if (href) {
            return (
              <a
                key={i}
                href={href}
                onClick={() => this.clearMenuStatus(i, duration)}
                className={white && 'white'}
                id={`${text.toLowerCase()}-link`}
                rel="noopener noreferrer"
              >
                {text}
              </a>
            );
          }
          return (
            <Link
              smooth
              key={i}
              to={to}
              activeClass="active"
              onClick={() => this.clearMenuStatus(i, duration)}
              duration={duration}
              id={`${text.toLowerCase()}-link`}
              className={classnames({active}, white && 'white')}
            >
              {text}
            </Link>
          );
        })}
      </div>
    );
  }

  renderOpenedMenu() {
    return (
      <div
        className="close-menu-icon"
        onClick={() => this.setState({isMenuStatus: ''})}
      >
        <CloseMenuIcon />
      </div>
    );
  }

  renderClosedMenu() {
    return (
      <div
        className="menu-icon"
        onClick={() => this.setState({isMenuStatus: 'opened'})}
      >
        <MenuIcon />
      </div>
    );
  }

  renderSocial() {
    return (
      <div className="social-links">
        <FacebookIcon />
        <LinkedInIcon />
        <BloggerIcon />
        <ClutchIcon />
        <AngelListIcon />
      </div>
    );
  }

  render() {
    const {logoIcon} = this.props;
    const {isMenuStatus} = this.state;

    return (
      <div className={classnames('navigation-bar', isMenuStatus)}>
        <div className="bar-content">
          <div className="top-bar">
            <a className="logo-icon" href="/" rel="noopener noreferrer">
              {logoIcon}
            </a>
            <div className="menu">
              {isMenuStatus ? this.renderOpenedMenu() : this.renderClosedMenu()}
            </div>
          </div>
          {this.renderLinks()}
          <NavLink className="consultation-link" to="/consult">
            Free Consultation
          </NavLink>
          {isMenuStatus && this.renderSocial()}
        </div>
      </div>
    );
  }
}

export default NavigationBar;
