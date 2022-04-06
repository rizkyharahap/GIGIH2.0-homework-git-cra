import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { accessToken } = useSelector((state) => state.global);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        accessToken ? (
          <Redirect
            to={{
              pathname: "/create-playlist",
              state: { from: location },
            }}
          />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default PublicRoute;
