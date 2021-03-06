import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Parallax} from 'react-scroll-parallax';

import ColorsBackground from './components/ColorsBackground';

import './index.styl';
import './mobile/index.styl';

class ColorsSection extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      width: PropTypes.string,
    })).isRequired,
    colorsSectionColor: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {className, colors, colorsSectionColor} = this.props;
    return (
      <div className={classnames('colors-section', className)}>
        <Parallax
          className="colors-parallax"
          offsetYMax={120}
          offsetYMin={-120}
        >
          <div className="colors">
            {colors.map(({name, color, width}) => (
              <div key={color} className="color" style={{backgroundColor: color, width, height: width}}>
                <div className="color-info" style={{color: color === '#FFFFFF' ? '#262C40' : '#FFFFFF'}}>
                  <div>
                    {name}
                  </div>
                  <div>
                    {color}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Parallax>
        <ColorsBackground color={colorsSectionColor} />
      </div>
    );
  }
}

export default ColorsSection;
