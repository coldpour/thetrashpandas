/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "components/Button";
import Anchor from "components/Anchor";

const Link = (props) => (
  <Button
    element={Anchor}
    css={css`
      text-decoration: none;
    `}
    {...props}
  />
);

export default Link;
