/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import MerchLink from "components/links/MerchLink";
import HomeLink from "components/links/HomeLink";
import BookLink from "components/links/BookLink";
import ListenLink from "components/links/ListenLink";

const SubNav = props => (
  <div
    css={css`
      display: flex;
      justify-content: space-evenly;
    `}
    {...props}
  />
);

const Nav = props => {
  return (
    <nav
      css={css`
        max-width: 400px;
        margin: auto;
      `}
      {...props}
    >
      <HomeLink />
      <SubNav>
        <MerchLink />
        <BookLink />
        <ListenLink />
      </SubNav>
    </nav>
  );
};

export default Nav;
