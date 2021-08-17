import React from "react";

import { Counter } from "./Counter";


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

    <section className={"explanation-section"}>
      <header>
        <h3>
          Explanation
        </h3>
      </header>

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
      </article>
    </section>
  </>
);