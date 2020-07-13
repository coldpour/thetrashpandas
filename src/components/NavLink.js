/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Link } from "components/Router";

const NavLink = ({ element: Element, ...restProps }) => (
  <Element
    css={css`
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 24px;
    `}
    {...restProps}
  />
);

NavLink.defaultProps = { element: Link };

export default NavLink;
