/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
//
import Logo from "components/Logo";
import NavLink from "components/NavLink";

const NavLogo = props => (
  <Logo
    css={css`
      height: 60px;
    `}
    {...props}
  />
);

const NavName = props => (
  <div {...props}>
    <div
      css={css`
        text-align: left;
        font-size: 12px;
        line-height: 6px;
      `}
    >
      The
    </div>
    <div
      css={css`
        font-size: 42px;
        line-height: 36px;
      `}
    >
      Trash Pandas
    </div>
  </div>
);

const HomeLink = props => (
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
    <NavName
      css={css`
        flex: 1;
      `}
    />
  </NavLink>
);

export default HomeLink;
