import 'styles/index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from 'store/.';
import { Root } from 'ui/root';

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('app'),
);
