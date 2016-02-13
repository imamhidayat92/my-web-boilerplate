import React from 'react';
import ReactDOM from 'react-dom';

import TestingComponent from '../components/TestingComponent';

export default class OtherPage {
  setup() {
    ReactDOM.render(
      <TestingComponent />,
      document.getElementById('container')
    );
  }
}
