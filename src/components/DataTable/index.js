import React from "react";

import { data } from "./data";
import DataTable from "./DataTable";
import { Explanation } from "../_lib";


const FIELDS = [
  {
    label: "#",
    field: "id"
  },
  "name",
  {
    label: "Number",
    field: "data"
  },
  "type"
];
const FILTERED_FIELDS = [
  {
    label: "Name",
    field: "name",
    defaultValue: ""
  },
  "data",
  "type"
];

export const DataTableExample = () => {

  return (
    <>
      <section className={"example-section"}>
        <DataTable
          fields={FIELDS}
          data={data}
          filters={FILTERED_FIELDS}
        />
      </section>
      <Explanation>
        <p>
          {
            "This example demonstrates simple reusable table takes field as " +
            "fields and filters as map for creates table with filters " +
            "dynamically."
          }
        </p>
        <p>
          {
            "It create simple input fields as filters and filter all fields as " +
            "text. Filters can define as string of field name or object."
          }
          <pre>
            {"const FIELDS = [\n" +
            "  {\n" +
            "    label: \"#\",\n" +
            "    field: \"id\"\n" +
            "  },\n" +
            "  \"name\",\n" +
            "  {\n" +
            "    label: \"Number\",\n" +
            "    field: \"data\"\n" +
            "  },\n" +
            "  \"type\"\n" +
            "];"}
          </pre>
        </p>
        <p>
          {
            "Fields map can be string and uses as column title and field name " +
            "to get value, or can be object."
          }
          <pre>
            {"const FIELDS = [\n" +
            "  \"id\",\n" +
            "  \"name\",\n" +
            "  {\n" +
            "    label: \"Number\",\n" +
            "    field: \"data\"\n" +
            "  },\n" +
            "  \"type\"\n" +
            "];"}
          </pre>
        </p>
      </Explanation>
    </>
  )
};