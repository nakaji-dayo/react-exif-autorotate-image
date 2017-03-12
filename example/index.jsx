import AutoRotateImage from '../index'
import React from 'react'
import { render } from 'react-dom'

const SampleApp = () => (
  <div>
    <img src="./img.jpg" width="300" />
    <AutoRotateImage src="./img.jpg" width="300" height="300" />
  </div>
);

render(
  <SampleApp />,
  document.getElementById('app')
);
