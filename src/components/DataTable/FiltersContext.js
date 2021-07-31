import React from "react";


const defaultState = {
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

const reducer = (state, action) => {
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

    case RESET_COUNTER:
      return ({
        ...state,
        counter: 0
      })

    default:
      return state;
  }
}


const Context = React.createContext();

export const ContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    createDefaultState(props.defaultCounter)
  );

  console.log({props});

  const value = React.useMemo(
    () => [state, dispatch],
    [state]
  );

  return (
    <Context.Provider value={value} {...props}/>
  );
}

export const useContext = () => React.useContext(Context);
export const withContext = (Component) => ({defaultCounter, ...props}) => (
  <ContextProvider defaultCounter={defaultCounter}>
    <Component {...props}/>
  </ContextProvider>
)