import React from "react";

import { Link } from "components/Router";
import Logo from "components/Logo";

const NavLink = ({ element: Element, style, ...restProps }) => (
  <Element
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

NavLink.defaultProps = { element: Link };

const Nav = ({ style }) => {
  return (
    <nav
      style={{
        padding: "1em",
        maxWidth: "400px",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        ...style
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
        <NavLink element="a" href="https://shop.spreadshirt.com/trash-pandas">
          Merch
        </NavLink>
        <NavLink to="/book">Book</NavLink>
        <NavLink to="/subscribe">Subscribe</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
