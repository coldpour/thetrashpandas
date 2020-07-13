/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Motto = (props) => (
  <div
    css={css`
      background: white;
      color: black;
      font-size: 3em;
      padding: 1em 0;
    `}
  >
    <div>you're</div>
    <div>gonna</div>
    <div>dance</div>
  </div>
);

export default Motto;
