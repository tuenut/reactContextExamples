import React from "react";

import {Switch, Route, Link} from "react-router-dom";

import {CountersExample} from "../Counter";
import {DataTableExample} from "../DataTable";


export const App = () => {
  const [example, setExamlple]  = React.useState();

  return (
    <div className="App">
      <nav>
        <Link to="counter">
          Counters
        </Link>

        <div className="separator"></div>

        <Link to="data-table">
          Data Table
        </Link>
      </nav>

      <main>
        <Switch>
          <Route
            path={"/counter"} 
            exact={true} 
            name={"Counters Example"} 
            render={CountersExample}
          />
          <Route
            path={"/data-table"}
            exact={true}
            name={"Data Table Example"}
            render={DataTableExample}
          />
        </Switch>
      </main>
    </div>
  );
}
