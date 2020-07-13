/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Name = (props) => (
  <div {...props}>
    <div
      css={css`
        font-weight: bold;
        display: inline-block;
      `}
    >
      <div
        css={css`
          text-align: left;
          font-size: 0.75em;
          line-height: 0.325em;
        `}
      >
        The
      </div>
      <div
        css={css`
          font-size: 3em;
          line-height: 1em;
          white-space: nowrap;
        `}
      >
        Trash Pandas
      </div>
    </div>
  </div>
);

export default Name;
