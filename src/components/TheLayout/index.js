import React from "react";

import { TheContent } from "./TheContent";
import { TheHeadbar } from "./TheHeadbar";
import { TheSidebar } from "./TheSidebar";

import "../../styles/TheLayout.css";


export const TheLayout = () => {
  const [showSideMenu, setShowSideMenu] = React.useState(true);

  const classes = [
    "the-layout",
    showSideMenu
      ? "the-layout-sidebar-show"
      : "the-layout-sidebar-collapse"
  ].join(" ");

  return (
    <div className={classes}>
      <TheHeadbar showSideMenu={showSideMenu}/>
      <TheSidebar
        show={showSideMenu}
        setShow={setShowSideMenu}
      />
      <TheContent className={!showSideMenu ? "sidebar-collapsed" : ""}/>
    </div>
  );
};
