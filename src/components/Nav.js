import React from "react";

import { Link } from "components/Router";
import Logo from "components/Logo";

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
        padding: "1em",
        maxWidth: "400px",
        display: "flex",
        alignItems: "center",
        margin: "auto"
      }}
    >
      <NavLink
        to="/"
        style={{
          lineHeight: 0.7
        }}
      >
        <Logo style={{ height: "40px" }} />
      </NavLink>
      <div style={{ display: "flex", flex: 1, justifyContent: "space-evenly" }}>
        <NavLink to="/book" style={{}}>
          Book
        </NavLink>
        <NavLink to="/subscribe" style={{}}>
          Subscribe
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
