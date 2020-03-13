import React from "react";

import { Link } from "components/Router";

const NavLink = ({ style, ...restProps }) => (
  <Link
    style={{
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "24px",
      ...style
    }}
    {...restProps}
  />
);

const Nav = ({ style }) => {
  return (
    <nav
      style={{
        padding: "2em",
        display: "flex",
        justifyContent: "space-evenly",
        maxWidth: "400px",
        margin: "auto"
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/subscribe">Subscribe</NavLink>
      <NavLink to="/book">Book</NavLink>
    </nav>
  );
};

export default Nav;
