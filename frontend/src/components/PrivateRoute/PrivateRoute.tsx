import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

type Auth = {
  isLoading: boolean;
  isAuthenticated: boolean;
};

interface PrivateRouteProps extends RouteProps {
  component: any;
  auth: Auth;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, auth, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (auth.isLoading) {
          return <h2>Loading</h2>;
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...routeProps} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
