import { CountersExample } from "../Counter";
import { DataTableExample } from "../DataTable";

export const routes = [
  {
    path: "/counter",
    exact: true,
    name: "Counters Example",
    render: CountersExample
  },
  {
    path: "/data-table",
    exact: true,
    name: "Data Table Example",
    render: DataTableExample
  }
];

export default routes;
