/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Copy = (props) => (
  <div
    css={css`
      padding: 1em 0 0;
    `}
    {...props}
  >
    The Trash Pandas
    {" \u00a9 "}
    {new Date().getFullYear()}
  </div>
);

export default Copy;
