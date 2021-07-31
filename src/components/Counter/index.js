import React from "react";

import {Counter} from "./Counter";


export const CountersExample = () => (
  <React.Fragment>
    <Counter defaultCounter={25}/>
    <Counter defaultCounter={42}/>
  </React.Fragment>
)