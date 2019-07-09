import React from 'react';
import PropTypes from 'prop-types';
import Skycons from './skycons';

class ReactAnimatedWeather extends React.Component {
  constructor(props) {
    super(props);

    this.skyconIcon = new Skycons({
      color: props.color
    });
  }

  componentDidMount() {
    const { icon, animate } = this.props;
    this.setIcon(icon, animate);
  }

  componentWillReceiveProps(nextProps) {
    // If color props match, don't reinitialize the icon
    if (this.skyconIcon.color === nextProps.color) {
      return;
    }

    // Remove the old icon
    this.skyconIcon.remove(this.skycon);

    this.skyconIcon = new Skycons({
      color: nextProps.color
    });

    this.setIcon(nextProps.icon, nextProps.animate);
    this.forceUpdate();
  }

  setIcon(icon, animate) {
    this.skyconIcon.add(this.skycon, Skycons[icon]);

    if (animate) {
      this.skyconIcon.play();
    }
  }

  render() {
    const { size } = this.props;
    return (
      <canvas
        ref={canvas => {
          this.skycon = canvas;
        }}
        width={size}
        height={size}
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
