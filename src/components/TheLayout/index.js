import React from "react";

import { TheContent } from "../TheContent";
import { TheHeadbar } from "../TheHeadbar";
import { TheSidebar } from "../TheSidebar";


export const TheLayout = () => {
  return (
    <div className={"the-layout"}>
      <TheHeadbar/>
      <TheSidebar/>
      <TheContent/>
    </div>
  );
};
