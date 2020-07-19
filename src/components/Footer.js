/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import Name from "components/Name";
import Follow from "components/Follow";
import Copy from "components/Copy";

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
    <Copy />
  </footer>
);

export default Footer;
