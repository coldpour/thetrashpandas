/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
//
import Logo from "components/Logo";
import NavLink from "components/NavLink";
import Name from "components/Name";

const NavLogo = (props) => (
  <Logo
    css={css`
      height: 60px;
    `}
    {...props}
  />
);

const HomeLink = (props) => (
  <NavLink
    to="/"
    css={css`
      padding: 0.5em 0;
      display: flex;
      align-items: center;
    `}
    {...props}
  >
    <NavLogo
      css={css`
        flex: 0 0 100px;
      `}
    />
    <Name
      css={css`
        font-size: 14px;
      `}
    />
  </NavLink>
);

export default HomeLink;
