import React from "react";

import { Link, useLocation } from "react-router-dom";

import { headnav } from "./parts/headnav";
import { HOME_PATH } from "../../settings/routePaths";


const HeadbarNavLinkItem = ({label, linkTo, brand, classes}) => {
  const location = useLocation();

  let listItemClasses = ["headbar-nav-item"];

  if ( brand ) {
    listItemClasses = ["headbar-nav-brand", "accent-color"];
  }

  if ( location.pathname === linkTo && linkTo !== HOME_PATH ) {
    listItemClasses.push("headbar-nav-item-active")
  }

  if ( classes ) {
    listItemClasses.push(classes);
  }

  return (
    <li className={listItemClasses.join(" ")}>
      <Link to={linkTo}>
        {label}
      </Link>
    </li>
  );
};


export const TheHeadbar = () => {
  return (
    <nav className={"headbar dark-primary-color"}>
      <ul>
        {headnav.map((navItem) => (
          <HeadbarNavLinkItem {...navItem}/>
        ))}
      </ul>
      {/*<div>*/}
        <form>
          <input className={"headbar-search"}/>
          <button>
            Search
          </button>
        </form>
      {/*</div>*/}
    </nav>
  );
};