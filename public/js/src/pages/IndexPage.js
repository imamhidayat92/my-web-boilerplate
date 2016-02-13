import React from 'react';
import ReactDOM from 'react-dom';

import TestingComponent from '../components/TestingComponent';

export default class IndexPage {
  setup() {
    ReactDOM.render(
      <TestingComponent />,
      document.getElementById('container')
    );
  }
};
