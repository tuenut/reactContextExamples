import React from "react";

import { Link, useLocation } from "react-router-dom";

import sidenav from "./parts/sidenav";


const SidebarNavLink = ({label, linkTo, brand}) => {
  const location = useLocation();

  let linkClasses = ["sidebar-nav-link"];

  if ( brand ) {
    linkClasses.push("sidebar-nav-brand");
  }

  if ( location.pathname === linkTo ) {
    linkClasses.push("sidebar-nav-link-active")
  }

  return (
    <Link className={linkClasses.join(" ")} to={linkTo}>
      {label}
    </Link>
  );
};

const SidebarNavLinkItem = (props) => {
  let listItemClasses = ["sidebar-nav-item"];

  return (
    <li className={listItemClasses.join(" ")}>
      <SidebarNavLink {...props}/>
    </li>
  );
};


export const TheSidebar = () => {

  return (
    <nav className={"sidebar"}>
      <ul>
        {sidenav.map((navItem) => (
          <SidebarNavLinkItem {...navItem}/>
        ))}
      </ul>

      <button>
        Collapse
      </button>
    </nav>
  );
};