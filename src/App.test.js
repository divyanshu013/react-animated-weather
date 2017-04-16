import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import App from './App';
import ReactAnimatedWeather from './ReactAnimatedWeather';

it('exports ReactAnimatedWeather component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactAnimatedWeather />, div);
  // Jest can't figure out <canvas> elements
});

// test('ReactAnimatedWeather is rendered properly', () => {
//   const component = renderer.create(
//     <ReactAnimatedWeather />
//   );
//
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
