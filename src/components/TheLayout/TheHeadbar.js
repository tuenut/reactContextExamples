import React from "react";

import { Link, useLocation } from "react-router-dom";

import {
  HOME_PATH,
  ABOUT_PATH,
  CONTACTS_PATH
} from "../../settings/routePaths";


const headbarNavigation = [
  {
    label: "TU Examples",
    linkTo: HOME_PATH,
    brand: true,
    classes: ""
  },
  {
    label: "About",
    linkTo: ABOUT_PATH
  },
  {
    label: "Contact",
    linkTo: CONTACTS_PATH
  }
];


const HeadbarNavLink = ({label, linkTo, brand, classes}) => {
  const location = useLocation();

  let linkClasses = ["headbar-nav-link"];

  if ( brand ) {
    linkClasses.push("headbar-nav-brand");
  }

  if ( location.pathname === linkTo ) {
    linkClasses.push("headbar-nav-link-active")
  }

  if (classes) {
    linkClasses.push(classes);
  }

  return (
    <Link className={linkClasses.join(" ")} to={linkTo}>
      {label}
    </Link>
  );
};

const HeadbarNavLinkItem = (props) => {
  let listItemClasses = ["headbar-nav-item"];

  return (
    <li className={listItemClasses.join(" ")}>
      <HeadbarNavLink {...props}/>
    </li>
  );
};


export const TheHeadbar = () => {
  return (
    <nav className={"headbar"}>
      <ul>
        {headbarNavigation.map((navItem) => (
          <HeadbarNavLinkItem {...navItem}/>
        ))}
      </ul>
    </nav>
  );
};