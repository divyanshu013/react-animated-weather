import React from 'react';
import ReactAnimatedWeather from './ReactAnimatedWeather';

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 512,
  animate: true
};

const App = () => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);

export default App;
