/** @jsx jsx */
import { jsx } from "@emotion/core";
import { isLight } from "./Theme";

const PopRockMoshDisco = (props) => (
  <div
    css={(theme) => ({
      background: isLight(theme) ? "white" : "black",
      color: isLight(theme) ? "black" : "white",
      fontSize: "3em",
      padding: "1em 0 .5em",
    })}
  >
    <div>pop</div>
    <div>rock</div>
    <div>mosh</div>
    <div>disco</div>
  </div>
);

export default PopRockMoshDisco;
