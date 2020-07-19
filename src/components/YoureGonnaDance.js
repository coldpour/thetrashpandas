/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { isLight } from "./Theme";

const YoureGonnaDance = (props) => (
  <div
    css={(theme) => ({
      background: isLight(theme) ? "white" : "black",
      color: isLight(theme) ? "black" : "white",
      fontSize: "2em",
      padding: "0 0 2em",
    })}
  >
    <div>...you're gonna dance</div>
  </div>
);

export default YoureGonnaDance;
