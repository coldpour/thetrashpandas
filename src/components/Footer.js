/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import Social from "components/Social";
import Copy from "components/Copy";
import Name from "components/Name";

const Footer = () => (
  <footer>
    <Name
      css={css`
        font-size: 18px;
        margin-top: 2em;
      `}
    />
    <Social style={{ marginTop: "2em" }} />
    <Copy style={{ marginBottom: "1em" }} />
  </footer>
);

export default Footer;
