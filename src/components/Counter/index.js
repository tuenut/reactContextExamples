import React from "react";

import { Counter } from "./Counter";
import { Explanation } from "../_lib";


export const CountersExample = () => (
  <>
    <section className={"example-section counter-example"}>
      <Counter
        label={"Default counter"}
        className={"grid-col-1"}
      />
      <Counter
        label={"Preseted counter"}
        className={"grid-col-2"}
        defaultCounter={42}
      />
    </section>

    <Explanation>
      <p>
        {
          "There is example of usage two components which uses same " +
          "contexts but states are separated and independent."
        }
      </p>
      <p>
        You can use each counter separately from other.
      </p>
    </Explanation>
  </>
);