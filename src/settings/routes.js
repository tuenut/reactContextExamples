import { CountersExample } from "../components/Counter";
import { DataTableExample } from "../components/DataTable";
import { Home } from "../components/ThePages";
import { About } from "../components/ThePages/About";
import { Contacts } from "../components/ThePages/Contacts";

import {
  COUNTERS_EXAMPLE_PATH,
  DATA_TABLE_EXAMPLE_PATH,
  HOME_PATH,
  CONTACTS_PATH,
  ABOUT_PATH
} from "./routePaths";


export const routes = [
  {
    path: HOME_PATH,
    exact: true,
    name: "Welcome!",
    render: Home
  },
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
    path: ABOUT_PATH,
    exact: true,
    name: "About me",
    render: About
  },
  {
    path: CONTACTS_PATH,
    exact: true,
    name: "Contact with me",
    render: Contacts
  },
];

export default routes;
