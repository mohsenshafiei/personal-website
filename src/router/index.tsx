import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './private-route';
import { Login } from 'ui/pages/login';
import { Logout } from 'ui/pages/logout';
import { NotFound } from 'ui/pages/not-found';

interface RouteObject {
  path: string;
  component: any;
  isPrivate: boolean;
}

const routes: RouteObject[] = [
  {
    path: '/logout',
    component: Logout,
    isPrivate: false,
  },
  {
    path: '/',
    component: Login,
    isPrivate: false,
  },
  {
    path: '*',
    component: NotFound,
    isPrivate: true,
  },
];

interface RouterProps {
  isAuthenticated: boolean;
}

export class RouterDumb extends React.Component<RouterProps, {}> {
  constructor(props: RouterProps) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            routes.map((route, index) => {
              if (route.isPrivate) {
                return <PrivateRoute exact key={index} path={route.path} component={route.component} />
              }
              return (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  render={() => (
                    (this.props.isAuthenticated && route.path !== '/logout') ? <Redirect to="/ride-request" /> : (<route.component />)
                  )}
                />
              )
            })
          }
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = () => ({
  isAuthenticated: false,
});

const mapDispatchToProps = () => ({});

export const Router = connect(mapStateToProps, mapDispatchToProps)(RouterDumb);
