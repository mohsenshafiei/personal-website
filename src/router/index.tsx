import * as React from 'react';
import { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Home } from 'ui/pages/home';
import { Header } from 'ui/components/header';

interface RouteObject {
  path: string;
  component: any;
  isPrivate: boolean;
}

const routes: RouteObject[] = [
  {
    path: '/',
    component: Home,
    isPrivate: false,
  },
  {
    path: '*',
    component: lazy(() => import('ui/pages/not-found')),
    isPrivate: false,
  },
];

export const Router: React.SFC<> = () => {
  return (
    <Suspense fallback={<></>}>
      <HashRouter>
        <Header />
        <Switch>
          {
            routes.map((route, index) => {
              return (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  render={() => <route.component />}
                />
              )
            })
          }
        </Switch>
      </HashRouter>
    </Suspense>
  );
}
