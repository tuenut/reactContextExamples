import React from "react";

import { TheContent } from "./TheContent";
import { TheHeadbar } from "./TheHeadbar";
import { TheSidebar } from "./TheSidebar";

import "../../styles/TheLayout.css";


export const TheLayout = () => {
  const [showSideMenu, setShowSideMenu] = React.useState(true);

  return (
    <div className={"the-layout"}>
      <TheHeadbar showSideMenu={showSideMenu}/>
      {/*<TheSidebar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu}/>*/}
      <TheContent/>
    </div>
  );
};
