import React from 'react';
import PropTypes from 'prop-types';
import skycons from './skycons';

class ReactAnimatedWeather extends React.Component {

  constructor(props) {
    super(props);

    this.skyconIcon = new skycons({
      color: props.color
    });
  }

  componentDidMount() {
    this.setIcon(this.props.icon, this.props.animate);
  }

  componentWillReceiveProps(nextProps) {
    this.skyconIcon = new skycons({
      color: nextProps.color
    });

    this.setIcon(nextProps.icon, nextProps.animate);
    this.forceUpdate();
  }

  setIcon(icon, animate) {
    this.skyconIcon.add(this.skycon, skycons[icon]);

    if (animate) {
      this.skyconIcon.play();
    }
  }

  render() {
    return (
      <canvas
        ref={(canvas) => { this.skycon = canvas; }}
        width={this.props.size}
        height={this.props.size}
      />
    );
  }
}

ReactAnimatedWeather.defaultProps = {
  animate: true,
  size: 64,
  color: 'black'
};

ReactAnimatedWeather.propTypes = {
  icon: PropTypes.oneOf([
    'CLEAR_DAY',
    'CLEAR_NIGHT',
    'PARTLY_CLOUDY_DAY',
    'PARTLY_CLOUDY_NIGHT',
    'CLOUDY',
    'RAIN',
    'SLEET',
    'SNOW',
    'WIND',
    'FOG'
  ]).isRequired,
  animate: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export default ReactAnimatedWeather;
