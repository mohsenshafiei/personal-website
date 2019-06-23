import * as React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './private-route';
import { Home } from 'ui/pages/home';
import { Blog } from 'ui/pages/blog';
import { Post } from 'ui/pages/post';
import { Story } from 'ui/pages/story';
import { Biography } from 'ui/pages/biography';
import { NotFound } from 'ui/pages/not-found';
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
    path: '/blog',
    component: Blog,
    isPrivate: false,
  },
  {
    path: '/biography',
    component: Biography,
    isPrivate: false,
  },
  {
    path: '/post',
    component: Post,
    isPrivate: false,
  },
  {
    path: '/story',
    component: Story,
    isPrivate: false,
  },
  {
    path: '*',
    component: NotFound,
    isPrivate: false,
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
      <HashRouter>
        <Header />
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
      </HashRouter>
    );
  }
}

const mapStateToProps = () => ({
  isAuthenticated: false,
});

const mapDispatchToProps = () => ({});

export const Router = connect(mapStateToProps, mapDispatchToProps)(RouterDumb);
