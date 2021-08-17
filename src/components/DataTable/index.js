import React from "react";

import { data } from "./data";
import DataTable from "./DataTable";
import { Explanation } from "../_lib";


const FIELDS = ["id", "name", "data", "type"];
const FILTERED_FIELDS = [
  {
    label: "Name",
    field: "name",
    defaultValue: ""
  }, "data", "type"];

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
      </Explanation>
    </>
  )
};