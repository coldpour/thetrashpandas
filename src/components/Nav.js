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
        alignItems: "flex-end",
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
        <Logo style={{ height: "60px" }} />
      </NavLink>
      <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
        <NavLink
          element="a"
          href="https://shop.spreadshirt.com/trash-pandas"
          style={{ margin: "0 0.5em" }}
        >
          merch
        </NavLink>
        <NavLink to="/book">book</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
