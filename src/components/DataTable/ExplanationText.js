import React from "react";


export const ExplanationText = () => {
  return (
    <article>
      <p>
        {"This example demonstrates simple reusable table takes "}
        <code>fields</code>-prop
        {" as fields map and "}<code>filters</code>
        {" as map for creates table with filters dynamically."}
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
      <pre>
        {
          "const defaultFiltersState = {\n" +
          "  page: 0,\n" +
          "  pageSize: 25\n" +
          "};\n" +
          "\n" +
          "\n" +
          "const SET_PAGE = \"SET_PAGE\";\n" +
          "const SET_PAGE_SIZE = \"SET_PAGE_SIZE\";\n" +
          "const CLEAR_FILTERS = \"CLEAR_FILTERS\";\n" +
          "\n" +
          "export const setPage = () =>\n" +
          "  ({type: SET_PAGE});\n" +
          "export const setPageSize = () =>\n" +
          "  ({type: SET_PAGE_SIZE});\n" +
          "export const setCounterTo = (value) =>\n" +
          "  ({type: CLEAR_FILTERS, payload: value});\n" +
          "\n" +
          "const filtersReducer = (state, action) => {\n" +
          "  switch ( action.type ) {\n" +
          "    case SET_PAGE:\n" +
          "      return ({\n" +
          "        ...state,\n" +
          "        counter: state.counter + 1\n" +
          "      });\n" +
          "\n" +
          "    case SET_PAGE_SIZE:\n" +
          "      return ({\n" +
          "        ...state,\n" +
          "        counter: state.counter - 1\n" +
          "      });\n" +
          "\n" +
          "    case CLEAR_FILTERS:\n" +
          "      return ({\n" +
          "        ...state,\n" +
          "        counter: parseInt(action.payload)\n" +
          "      });\n" +
          "\n" +
          "    default:\n" +
          "      if ( action.type.toLowerCase() in state ) {\n" +
          "        return ({\n" +
          "          ...state,\n" +
          "          [action.type.toLowerCase()]: action.payload\n" +
          "        });\n" +
          "      } else {\n" +
          "        return state;\n" +
          "      }\n" +
          "  }\n" +
          "};\n" +
          "\n" +
          "const FiltersContext = React.createContext();\n" +
          "\n" +
          "export const useFiltersContext = () => React.useContext(FiltersContext);\n" +
          "\n" +
          "export const withFiltersContext = (Component) => (props) => {\n" +
          "  let customFilters = {};\n" +
          "\n" +
          "  if ( props.filters ) {\n" +
          "    customFilters = Object.assign({},\n" +
          "      ...props.filters.map((filter) => ({\n" +
          "        [filter.field || filter]: filter.defaultValue || \"\"\n" +
          "      }))\n" +
          "    );\n" +
          "  }\n" +
          "\n" +
          "  const [state, dispatch] = React.useReducer(\n" +
          "    filtersReducer,\n" +
          "    {...customFilters, ...defaultFiltersState}\n" +
          "  );\n" +
          "\n" +
          "  const value = React.useMemo(\n" +
          "    () => [state, dispatch],\n" +
          "    [state]\n" +
          "  );\n" +
          "\n" +
          "  return (\n" +
          "    <FiltersContext.Provider value={value}>\n" +
          "      <Component {...props}/>\n" +
          "    </FiltersContext.Provider>\n" +
          "  );\n" +
          "};" +
          "\n" +
          "const TableHead = ({fields = []}) => {\n" +
          "  const _fields = React.useMemo(\n" +
          "    () => fields.map(f => f.label ? f.label : f),\n" +
          "    [fields]\n" +
          "  );\n" +
          "\n" +
          "  return (\n" +
          "    <thead>\n" +
          "    <tr>\n" +
          "      {_fields.map((field, idx) => (\n" +
          "        <th key={idx}>\n" +
          "          {field}\n" +
          "        </th>\n" +
          "      ))}\n" +
          "    </tr>\n" +
          "    </thead>\n" +
          "  );\n" +
          "};\n" +
          "\n\n" +
          "const TableBody = ({data = [], fields = []}) => {\n" +
          "  const _fields = React.useMemo(\n" +
          "    () => fields.map(f => f.field ? f.field : f),\n" +
          "    [fields]\n" +
          "  );\n" +
          "\n" +
          "  return (\n" +
          "    <tbody>\n" +
          "    {data.map((dataItem, idx) => (\n" +
          "      <tr key={idx}>\n" +
          "        {_fields.map((field, idx) => (\n" +
          "          <td key={idx}>\n" +
          "            {dataItem[field]}\n" +
          "          </td>\n" +
          "        ))}\n" +
          "      </tr>\n" +
          "    ))}\n" +
          "    </tbody>\n" +
          "  );\n" +
          "};\n" +
          "\n" +
          "const Filter = ({filterConfig}) => {\n" +
          "  const [filtersState, dispatch] = useFiltersContext();\n" +
          "\n" +
          "  let filterLabel, filterField, filterType;\n" +
          "\n" +
          "  if ( typeof filterConfig === \"string\" ) {\n" +
          "    filterLabel = filterField = filterConfig;\n" +
          "  } else {\n" +
          "    ({\n" +
          "      label: filterLabel,\n" +
          "      field: filterField,\n" +
          "      type: filterType\n" +
          "    } = filterConfig);\n" +
          "  }\n" +
          "\n" +
          "  if ( !filterType ) filterType = \"text\";\n" +
          "\n" +
          "  const inputId = `data-table-filter-field-${filterField}`;\n" +
          "\n" +
          "  const handleOnChange = (e) => dispatch({\n" +
          "    type: filterField,\n" +
          "    payload: e.target.value\n" +
          "  });\n" +
          "\n" +
          "  return (\n" +
          "    <div className={\"data-table-filter\"}>\n" +
          "      <label htmlFor={inputId}>\n" +
          "        {filterLabel}\n" +
          "      </label>\n" +
          "      <input\n" +
          "        id={inputId}\n" +
          "        type={filterType}\n" +
          "        onChange={handleOnChange}\n" +
          "        value={filtersState[filterField]}\n" +
          "      />\n" +
          "    </div>\n" +
          "  )\n" +
          "};\n" +
          "\n" +
          "const DataTableFilters = ({filters, data, changeDisplayedData}) => {\n" +
          "  const [filtersState] = useFiltersContext();\n" +
          "\n" +
          "  React.useEffect(() => {\n" +
          "    const activeFilters = Object.entries(filtersState)\n" +
          "      .filter(([filterName, filterValue]) => {\n" +
          "        if ( filterName === \"page\" || filterName === \"pageSize\" ) {\n" +
          "          return false;\n" +
          "        } else {\n" +
          "          return Boolean(filterValue);\n" +
          "        }\n" +
          "      });\n" +
          "\n" +
          "    const filteredData = activeFilters.length\n" +
          "      ? data.filter((dataItem) => {\n" +
          "        return activeFilters.every(([field, value]) =>\n" +
          "          dataItem[field].toString().includes(value))\n" +
          "      })\n" +
          "      : data;\n" +
          "\n" +
          "    changeDisplayedData(filteredData);\n" +
          "  }, [filtersState, data]);\n" +
          "\n" +
          "  return (\n" +
          "    <div>\n" +
          "      {filters.map((filter, idx) => (\n" +
          "        <Filter key={idx} filterConfig={filter}/>\n" +
          "      ))}\n" +
          "    </div>\n" +
          "  )\n" +
          "};\n" +
          "\n" +
          "\n" +
          "export const DataTable = ({fields, data}) => {\n" +
          "\n" +
          "  return (\n" +
          "    <div className={\"data-table-container\"}>\n" +
          "      <table className={\"data-table\"}>\n" +
          "        <TableHead fields={fields}/>\n" +
          "        <TableBody data={data} fields={fields}/>\n" +
          "      </table>\n" +
          "    </div>\n" +
          "  )\n" +
          "};\n" +
          "\n" +
          "\n" +
          "export const DataTableComposite = withFiltersContext(({fields, data, filters}) => {\n" +
          "  const [displayedData, setDisplayedData] = React.useState(data);\n" +
          "\n" +
          "  return (\n" +
          "    <div className={\"data-table\"}>\n" +
          "      {filters.length && (\n" +
          "        <DataTableFilters\n" +
          "          filters={filters}\n" +
          "          changeDisplayedData={setDisplayedData}\n" +
          "          data={data}\n" +
          "        />\n" +
          "      )}\n" +
          "\n" +
          "      <DataTable data={displayedData} fields={fields}/>\n" +
          "    </div>\n" +
          "  )\n" +
          "\n" +
          "});"
        }
      </pre>
    </article>
  );
};

