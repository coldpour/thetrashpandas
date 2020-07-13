/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import Name from "components/Name";
import Follow from "components/Follow";

const Footer = (props) => (
  <footer
    css={css`
      padding: 1em 0;
    `}
    {...props}
  >
    <Name
      css={css`
        font-size: 18px;
        margin-top: 2em;
      `}
    />
    <Follow
      css={css`
        padding: 0 1em;
      `}
    />
  </footer>
);

export default Footer;
