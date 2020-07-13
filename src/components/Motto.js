/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Motto = (props) => (
  <div
    css={css`
      padding: 2em;
    `}
  >
    <div
      css={css`
        font-size: 3em;
        font-wieght: 900;
      `}
      {...props}
    >
      <div>pop</div>
      <div>rock</div>
      <div>mosh</div>
      <div>disco</div>
    </div>
    <div
      css={css`
        margin-top: 1em;
        font-size: 1.25em;
      `}
    >
      ...you're gonna dance
    </div>
  </div>
);

export default Motto;
