import React from "react";


export const ExplanationText = () => {
  return (
    <article>
      <p>
        {
          "There is example of usage two components which uses same " +
          "contexts but states are separated and independent."
        }
      </p>
      <p>
        You can use each counter separately from other.
      </p>
      <p>
        {"Counter component takes "}
        <code>label</code> and optional <code>defaultCounter</code> props.
        {
          " First uses as title/label for counter, second uses as init value." +
          " That shows separation between counter - you can set few " +
          "counters in different values and change its independent."
        }
      </p>
      <pre>
        {
          "\n" +
          "const createDefaultState = (defaultValue) => ({\n" +
          "  counter: defaultValue || 0\n" +
          "});\n" +
          "\n" +
          "const INCREMENT_COUNTER = \"INCREMENT_COUNTER\";\n" +
          "const DECREMENT_COUNTER = \"DECREMENT_COUNTER\";\n" +
          "const SET_COUNTER_TO = \"SET_COUNTER_TO\";\n" +
          "const RESET_COUNTER = \"RESET_COUNTER\";\n" +
          "\n" +
          "export const incrementCounter = () => ({type: INCREMENT_COUNTER});\n" +
          "export const decrementCounter = () => ({type: DECREMENT_COUNTER});\n" +
          "export const setCounterTo = (value) => ({\n" +
          "  type: SET_COUNTER_TO,\n" +
          "  payload: value\n" +
          "});\n" +
          "export const resetCounter = () => ({type: RESET_COUNTER});\n" +
          "\n" +
          "const reducer = (state, action) => {\n" +
          "  switch ( action.type ) {\n" +
          "    case INCREMENT_COUNTER:\n" +
          "      return {\n" +
          "        ...state,\n" +
          "        counter: state.counter + 1\n" +
          "      };\n" +
          "\n" +
          "    case DECREMENT_COUNTER:\n" +
          "      return {\n" +
          "        ...state,\n" +
          "        counter: state.counter - 1\n" +
          "      };\n" +
          "\n" +
          "    case SET_COUNTER_TO:\n" +
          "      let newValue;\n" +
          "\n" +
          "      try {\n" +
          "        newValue = parseInt(action.payload);\n" +
          "      } catch ( e ) {\n" +
          "        return state;\n" +
          "      }\n" +
          "\n" +
          "      return {\n" +
          "        ...state,\n" +
          "        counter: newValue\n" +
          "      };\n" +
          "\n" +
          "    case RESET_COUNTER:\n" +
          "      return {\n" +
          "        ...state,\n" +
          "        counter: 0\n" +
          "      };\n" +
          "\n" +
          "    default:\n" +
          "      return state;\n" +
          "  }\n" +
          "};\n" +
          "\n" +
          "const CounterContext = React.createContext();\n" +
          "\n" +
          "\n" +
          "export const useCounter = () => React.useContext(CounterContext);\n" +
          "\n" +
          "export const withCounterContext = (Component) =>\n" +
          "  ({defaultCounter = 0, ...props}) => {\n" +
          "    const [state, dispatch] = React.useReducer(\n" +
          "      reducer,\n" +
          "      createDefaultState(defaultCounter)\n" +
          "    );\n" +
          "\n" +
          "    const value = React.useMemo(() => [state, dispatch], [state]);\n" +
          "\n" +
          "    return (\n" +
          "      <CounterContext.Provider value={value}>\n" +
          "        <Component {...props} />\n" +
          "      </CounterContext.Provider>\n" +
          "    );\n" +
          "  };" +
          "\n\n" +
          "\n" +
          "export const Counter = withCounterContext(({label: titleLabel, className = \"\"}) => {\n" +
          "  const [state, dispatch] = useCounter();\n" +
          "\n" +
          "  const handleOnChange = (e) => {\n" +
          "    const newValue = e.target.value;\n" +
          "\n" +
          "    if ( newValue === \"\" ) {\n" +
          "      dispatch(resetCounter());\n" +
          "    } else {\n" +
          "      dispatch(setCounterTo(newValue));\n" +
          "    }\n" +
          "  };\n" +
          "\n" +
          "  const handleOnIncrease = () => dispatch(incrementCounter());\n" +
          "\n" +
          "  const handleOnDecrease = () => dispatch(decrementCounter());\n" +
          "\n" +
          "  const handleOnReset = () => dispatch(resetCounter());\n" +
          "\n" +
          "  return (\n" +
          "    <fieldset className={[\"counter-container\", className].join(\" \").trim()}>\n" +
          "      <div className={\"counter-display\"}>\n" +
          "        <label className={\"counter-label\"} htmlFor=\"counter-one-input\">\n" +
          "          <h5>{titleLabel}</h5>\n" +
          "        </label>\n" +
          "        <input\n" +
          "          className={\"counter-input\"}\n" +
          "          value={state.counter}\n" +
          "          onChange={handleOnChange}\n" +
          "        />\n" +
          "      </div>\n" +
          "\n" +
          "      <div className={\"counter-controls\"}>\n" +
          "        <button\n" +
          "          className={\"btn btn-success\"}\n" +
          "          onClick={handleOnIncrease}\n" +
          "        >\n" +
          "          +\n" +
          "        </button>\n" +
          "\n" +
          "        <button\n" +
          "          className={\"btn btn-danger\"}\n" +
          "          onClick={handleOnDecrease}\n" +
          "        >\n" +
          "          -\n" +
          "        </button>\n" +
          "\n" +
          "        <button\n" +
          "          className={\"btn btn-light\"}\n" +
          "          onClick={handleOnReset}\n" +
          "        >\n" +
          "          Reset\n" +
          "        </button>\n" +
          "      </div>\n" +
          "\n" +
          "    </fieldset>\n" +
          "  )\n" +
          "});"
        }
      </pre>
    </article>
  );
};

