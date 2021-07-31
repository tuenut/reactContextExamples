import React from "react";

import { Link } from "react-router-dom";

import {
  DATA_TABLE_EXAMPLE_PATH,
  COUNTERS_EXAMPLE_PATH
} from "../../settings/routePaths";

export const TheSidebar = () => {
  return (
    <nav className={"sidebar"}>
      <ul>
        <li>
          <Link to={COUNTERS_EXAMPLE_PATH}>
            Counters
          </Link>
        </li>

        <li className="sidebar-separator-separator">s</li>

        <li>
          <Link to={DATA_TABLE_EXAMPLE_PATH}>
            Data Table
          </Link>
        </li>
      </ul>
    </nav>
  );
};
