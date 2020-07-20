/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import PopRockMoshDisco from "components/PopRockMoshDisco";
import YoureGonnaDance from "components/YoureGonnaDance";

const Motto = (props) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
    {...props}
  >
    <PopRockMoshDisco />
    <YoureGonnaDance />
  </div>
);

export default Motto;
