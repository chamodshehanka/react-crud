import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="!#" value>
        NavBar{" "}
        <span className="badge badge-pill badge-secordary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
