import React from "react";


const defaultFiltersState = {
  page: 0,
  pageSize: 25
};


const SET_PAGE = "SET_PAGE";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const CLEAR_FILTERS = "CLEAR_FILTERS";

export const setPage = () => 
  ({type: SET_PAGE});
export const setPageSize = () => 
  ({type: SET_PAGE_SIZE});
export const setCounterTo = (value) => 
  ({type: CLEAR_FILTERS, payload: value});

const filtersReducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE:
      return ({
        ...state,
        counter: state.counter + 1
      });

    case SET_PAGE_SIZE:
      return ({
        ...state, 
        counter: state.counter - 1 
      });

    case CLEAR_FILTERS:
      return ({
        ...state,
        counter: parseInt(action.payload)
      });

    default:
      if (action.type.toLowerCase() in state) {
        return ({
          ...state,
          [action.type.toLowerCase()]: action.payload
        });
      } else {
        return state;
      }
  }
}


const FiltersContext = React.createContext();

export const FiltersContextProvider = (props) => {
  const customFilters = props.filters 
    ? Object.assign({}, ...props.filters.map((filter) => 
        ({
          [filter.field || filter]: filter.defaultValue || ""})
      ))
    : {};

  const [state, dispatch] = React.useReducer(
    filtersReducer,
    {...customFilters, ...defaultFiltersState}
  );

  const value = React.useMemo(
    () => [state, dispatch],
    [state]
  );

  return (
    <FiltersContext.Provider value={value} {...props}/>
  );
}

export const useFiltersContext = () => React.useContext(FiltersContext);
export const withFiltersContext = (Component) => (props) => (
  <FiltersContextProvider filters={props.filters}>
    <Component {...props}/>
  </FiltersContextProvider>
);