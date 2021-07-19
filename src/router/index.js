import React, { lazy, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const routes = [
  {
    path: "/",
    Component: lazy(() => import("../pages/home")),
    exact: true,
  },
  {
    path: "/pokemon-detail",
    Component: lazy(() => import("../pages/pokemon-detail")),
    exact: true,
  },
  {
    path: "/pokedex",
    Component: lazy(() => import("../pages/pokedex")),
    exact: true,
  },
];

const RouterComponent = () => {
  return (
    <Route
      render={(state) => {
        const { location } = state;
        return (
          <Switch location={location}>
            {/* <Route exact path="/" render={() => <Redirect to="/" />} /> */}
            {routes.map(({ path, Component, exact }) => (
              <Route
                path={path}
                key={path}
                exact={exact}
                render={() => {
                  return (
                    <div>
                      <Suspense fallback={null}>
                        <Component />
                      </Suspense>
                    </div>
                  );
                }}
              />
            ))}
            <Redirect to="/auth/404" />
          </Switch>
        );
      }}
    />
  );
};

export default RouterComponent;
