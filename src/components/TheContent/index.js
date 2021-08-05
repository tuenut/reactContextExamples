import React from "react";

import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import routes from "../../settings/routes";
import {HOME_PATH} from "../../settings/routePaths";

import "./styles.css";


const TITLE = "Tuenut React Sandbox";

export const TheContent = () => {
  const location = useLocation();

  /** There is setting page title due to route name from route config. */
  React.useEffect(() => {
    const currentRoute = routes.find((route) =>
      (route.path === location.pathname)
    );

    const suffix = currentRoute?.title ? ": " + currentRoute.title : "";

    document.title = `${TITLE}${suffix}`;
  }, [location]);

  return (
    <main className={"content"}>
      <Switch>
        {routes.map((route, idx) => (
          <Route key={idx} {...route} />
        ))}
        <Redirect from={"/"} to={HOME_PATH}/>
      </Switch>
    </main>
  );
};
