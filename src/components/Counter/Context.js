import React from "react";


const createDefaultState = (defaultValue) => ({
  counter: defaultValue || 0
});

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const SET_COUNTER_TO = "SET_COUNTER_TO";
const RESET_COUNTER = "RESET_COUNTER";

export const incrementCounter = () => ({type: INCREMENT_COUNTER});
export const decrementCounter = () => ({type: DECREMENT_COUNTER});
export const setCounterTo = (value) => ({
  type: SET_COUNTER_TO,
  payload: value
});
export const resetCounter = () => ({type: RESET_COUNTER});

const reducer = (state, action) => {
  switch ( action.type ) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };

    case SET_COUNTER_TO:
      let newValue;

      try {
        newValue = parseInt(action.payload);
      } catch ( e ) {
        return state;
      }

      return {
        ...state,
        counter: newValue
      };

    case RESET_COUNTER:
      return {
        ...state,
        counter: 0
      };

    default:
      return state;
  }
};

const CounterContext = React.createContext();


export const useCounter = () => React.useContext(CounterContext);

export const withCounterContext = (Component) =>
  ({defaultCounter = 0, ...props}) => {
    const [state, dispatch] = React.useReducer(
      reducer,
      createDefaultState(defaultCounter)
    );

    const value = React.useMemo(() => [state, dispatch], [state]);

    return (
      <CounterContext.Provider value={value}>
        <Component {...props} />
      </CounterContext.Provider>
    );
  };
