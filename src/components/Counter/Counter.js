import React from "react";

import {
  withCounterContext,
  useCounter,
  incrementCounter,
  decrementCounter,
  setCounterTo,
  resetCounter
} from "./Context";

import "./styles.css";


export const Counter = withCounterContext(({label: titleLabel, className = ""}) => {
  const [state, dispatch] = useCounter();

  const handleOnChange = (e) => {
    const newValue = e.target.value;

    if ( newValue === "" ) {
      dispatch(resetCounter());
    } else {
      dispatch(setCounterTo(newValue));
    }
  };

  const handleOnIncrease = () => dispatch(incrementCounter());

  const handleOnDecrease = () => dispatch(decrementCounter());

  const handleOnReset = () => dispatch(resetCounter());

  return (
    <fieldset className={["counter-container", className].join(" ").trim()}>
      <div className={"counter-display"}>
        <label className={"counter-label"} htmlFor="counter-one-input">
          <h5>{titleLabel}</h5>
        </label>
        <input
          className={"counter-input"}
          value={state.counter}
          onChange={handleOnChange}
        />
      </div>

      <div className={"counter-controls"}>
        <button
          className={"btn btn-success"}
          onClick={handleOnIncrease}
        >
          +
        </button>

        <button
          className={"btn btn-danger"}
          onClick={handleOnDecrease}
        >
          -
        </button>

        <button
          className={"btn btn-light"}
          onClick={handleOnReset}
        >
          Reset
        </button>
      </div>

    </fieldset>
  )
});