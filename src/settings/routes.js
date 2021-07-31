import { CountersExample } from "../components/Counter";
import { DataTableExample } from "../components/DataTable";
import { Home } from "../components/ThePages";

import {
  COUNTERS_EXAMPLE_PATH,
  DATA_TABLE_EXAMPLE_PATH,
  HOME_PATH
} from "./routePaths";

export const routes = [
  {
    path: COUNTERS_EXAMPLE_PATH,
    exact: true,
    name: "Counters Example",
    render: CountersExample
  },
  {
    path: DATA_TABLE_EXAMPLE_PATH,
    exact: true,
    name: "Data Table Example",
    render: DataTableExample
  },
  {
    path: HOME_PATH,
    exact: true,
    name: "Welcome!",
    render: Home
  }
];

export default routes;
