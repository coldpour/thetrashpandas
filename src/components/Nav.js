/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Logo from "components/Logo";
import NavLink from "components/NavLink";
import Name from "components/Name";
import MerchLink from "components/links/MerchLink";
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

const NavLogo = (props) => (
  <Logo
    css={css`
      height: 60px;
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
      <div
        css={css`
          padding: 0.5em 0 1.5em;
          display: flex;
          align-items: center;
        `}
        {...props}
      >
        <NavLink to="/">
          <NavLogo
            css={css`
              flex: 0 0 100px;
            `}
          />
        </NavLink>

        <div
          css={css`
            position: relative;
          `}
        >
          <NavLink to="/">
            <Name
              css={css`
                font-size: 14px;
              `}
            />
          </NavLink>
          <SubNav
            css={css`
              position: absolute;
              width: 100%;
              top: 3.5em;
            `}
          >
            <MerchLink />
            <BookLink />
          </SubNav>
        </div>
      </div>{" "}
    </nav>
  );
};

export default Nav;
