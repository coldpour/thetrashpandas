/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import MerchLink from "components/links/MerchLink";
import HomeLink from "components/links/HomeLink";
import BookLink from "components/links/BookLink";

const SubNav = (props) => (
  <div
    css={css`
      display: flex;
      justify-content: space-evenly;
    `}
    {...props}
  />
);

const Nav = (props) => {
  return (
    <nav
      css={css`
        max-width: 400px;
        margin: auto;
        padding-bottom: 1em;
      `}
      {...props}
    >
      <HomeLink />
      <SubNav>
        <MerchLink />
        <BookLink />
      </SubNav>
    </nav>
  );
};

export default Nav;
