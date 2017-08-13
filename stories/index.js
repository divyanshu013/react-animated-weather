import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import ReactAnimatedWeather from '../src/ReactAnimatedWeather';

const stories = storiesOf('ReactAnimatedWeather', module);
stories.addDecorator(withKnobs);

stories.add('Available props', () => (
  <ReactAnimatedWeather
    icon={text('icon', 'CLEAR_DAY')}
  />
));
