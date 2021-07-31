import React from "react";

import {data}  from "./data";
import DataTable from "./DataTable";


// console.debug({data});

const FIELDS = ["id", "name", "data", "type"];
const FILTERED_FIELDS = [
  {
    label: "Name",
    field: "name",
    defaultValue: ""
  }, "data", "type"];

export const DataTableExample = () => {

  return (
    <div>
      <DataTable 
        fields={FIELDS} 
        data={data} 
        filters={FILTERED_FIELDS}
      />
    </div>
  )
}