import React from "react";

import {
  withContext,
  useContext, 
  incrementCounter, 
  decrementCounter, 
  setCounterTo, 
  resetCounter
} from "./Context";


export const Counter = withContext(() => {
  const [state, dispatch] = useContext();

  return (
    <div id="counter-one">
      <label htmlFor="counter-one-input">Counter One</label>
      <input
        id="counter-one-input"
        value={state.counter}
        onChange={(e) => {
          const newValue = e.target.value;

          if (newValue === "") {
            dispatch(setCounterTo(0));
            return;
          }

          try {
            dispatch(setCounterTo(parseInt(newValue)));
          } catch (e) {
            return;
          }
        }}
      />

      <button onClick={(e) => dispatch(incrementCounter())}>
        +
      </button>

      <button onClick={(e) => dispatch(decrementCounter())}>
        -
      </button>

      <button onClick={() => dispatch(resetCounter())}>
        Reset
      </button>
    </div>
  )
});