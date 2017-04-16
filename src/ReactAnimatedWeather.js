import React from 'react';
import PropTypes from 'prop-types';
import skycons from './skycons';

class ReactAnimatedWeather extends React.Component {
  componentDidMount() {
    const skyconIcon = new skycons({
      color: this.props.color
    });

    skyconIcon.add(this.skycon, skycons[this.props.icon]);
    if (this.props.animate) {
      skyconIcon.play();
    }
    // skyconIcon.set(this.skycon, skycons.PARTLY_CLOUDY_NIGHT);
    // skyconIcon.pause();
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
