import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface PrivateRouteProps {
  component: React.ComponentClass;
  isAuthenticated: boolean;
  getUserProfile: () => void;
  [x: string]: any;
}

class PrivateRouteDumb extends React.PureComponent<PrivateRouteProps, {}> {
  constructor(props: PrivateRouteProps) {
    super(props);
  }

  componentDidMount() {
    const { isAuthenticated, getUserProfile } = this.props;
    if (isAuthenticated) getUserProfile();
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props

    if (isAuthenticated === null) return null;

    if (isAuthenticated) {
      return (
        <Route
          {...rest}
          render={(props) => (<Component {...props} />)}
        />
      );
    }

    return (<Redirect to="/" />);
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const PrivateRoute = connect(mapStateToProps, mapDispatchToProps)(PrivateRouteDumb);
