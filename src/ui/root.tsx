import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Router } from '../router';

interface RootProps {
  store: Store;
}

export const Root: React.SFC<RootProps> = (props: RootProps) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <>
        <Router />
      </>
    </Provider>
  );
}
