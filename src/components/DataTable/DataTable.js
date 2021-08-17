import React from "react";

import {
  withFiltersContext,
  useFiltersContext
} from "./FiltersContext";

import "../../styles/DataTable.css";


const TableHead = ({fields = []}) => {
  const _fields = React.useMemo(
    () => fields.map(f => f.label ? f.label : f),
    [fields]
  );

  return (
    <thead>
    <tr>
      {_fields.map((field, idx) => (
        <th key={idx}>
          {field}
        </th>
      ))}
    </tr>
    </thead>
  );
};

const TableBody = ({data = [], fields = []}) => {
  const _fields = React.useMemo(
    () => fields.map(f => f.field ? f.field : f),
    [fields]
  );

  return (
    <tbody>
    {data.map((dataItem, idx) => (
      <tr key={idx}>
        {_fields.map((field, idx) => (
          <td key={idx}>
            {dataItem[field]}
          </td>
        ))}
      </tr>
    ))}
    </tbody>
  );
};

const Filter = ({filterConfig}) => {
  const [filtersState, dispatch] = useFiltersContext();

  let filterLabel, filterField, filterType;

  if ( typeof filterConfig === "string" ) {
    filterLabel = filterField = filterConfig;
  } else {
    ({
      label: filterLabel,
      field: filterField,
      type: filterType
    } = filterConfig);
  }

  if ( !filterType ) filterType = "text";

  const inputId = `data-table-filter-field-${filterField}`;

  const handleOnChange = (e) => dispatch({
    type: filterField,
    payload: e.target.value
  });

  return (
    <div className={"data-table-filter"}>
      <label htmlFor={inputId}>
        {filterLabel}
      </label>
      <input
        id={inputId}
        type={filterType}
        onChange={handleOnChange}
        value={filtersState[filterField]}
      />
    </div>
  )
};

const DataTableFilters = ({filters, data, changeDisplayedData}) => {
  const [filtersState] = useFiltersContext();

  React.useEffect(() => {
    const activeFilters = Object.entries(filtersState)
      .filter(([filterName, filterValue]) => {
        if ( filterName === "page" || filterName === "pageSize" ) {
          return false;
        } else {
          return Boolean(filterValue);
        }
      });

    const filteredData = activeFilters.length
      ? data.filter((dataItem) => {
        return activeFilters.every(([field, value]) =>
          dataItem[field].toString().includes(value))
      })
      : data;

    changeDisplayedData(filteredData);
  }, [filtersState, data]);

  return (
    <div>
      {filters.map((filter, idx) => (
        <Filter key={idx} filterConfig={filter}/>
      ))}
    </div>
  )
};


export const DataTable = ({fields, data}) => {

  return (
    <div className={"data-table-container"}>
      <table className={"data-table"}>
        <TableHead fields={fields}/>
        <TableBody data={data} fields={fields}/>
      </table>
    </div>
  )
};


export const DataTableComposite = withFiltersContext(({fields, data, filters}) => {
  const [displayedData, setDisplayedData] = React.useState(data);

  return (
    <div className={"data-table"}>
      {filters.length && (
        <DataTableFilters
          filters={filters}
          changeDisplayedData={setDisplayedData}
          data={data}
        />
      )}

      <DataTable data={displayedData} fields={fields}/>
    </div>
  )

});

export default DataTableComposite;