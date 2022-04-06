import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { accessToken } = useSelector((state) => state.global);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        accessToken ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
