import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

import './service.styl';

class Service extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		text: PropTypes.string,
		left: PropTypes.string,
		icons: PropTypes.arrayOf(PropTypes.object)
	};

	static defaultProps = {
		className: '',
		title: '',
		subtitle: '',
    text: '',
    left: '',
		icons: null
	};

  renderIcons() {
    const {icons} = this.props;

    return (
      <div className="service-icons">
        {icons.map(({icon, title}) => (
          <div className="service-icon" key={title}>
            {icon}
            <div className="icon-title">{title}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const {title, subtitle, text, left} = this.props;

    return (
      <div className="service">
        {left && this.renderIcons()}
        <Description
          title={title}
          subtitle={subtitle}
          text={text}
        />
        {!left && this.renderIcons()}
      </div>
    );
  }
}

export default Service;
