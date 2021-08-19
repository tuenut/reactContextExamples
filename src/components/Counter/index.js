import React from "react";

import { Counter } from "./Counter";
import { Explanation } from "../_lib";
import { ExplanationText } from "./ExplanationText";


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
      <ExplanationText/>
    </Explanation>
  </>
);