/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { isLight } from "./Theme";

const TwoWords = (props) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      @media (min-width: 800px) {
        flex-direction: row;
        justify-content: center;
      }
    `}
    {...props}
  />
);

const SecondWord = (props) => (
  <div
    css={css`
      @media (min-width: 800px) {
        margin-left: 0.25em;
      }
    `}
    {...props}
  />
);

const PopRockMoshDisco = (props) => (
  <div
    css={(theme) => ({
      background: isLight(theme) ? "white" : "black",
      color: isLight(theme) ? "black" : "white",
      fontSize: "3em",
      padding: "1em 0 .5em",
    })}
  >
    <TwoWords>
      <div>pop</div>
      <SecondWord>rock</SecondWord>
    </TwoWords>
    <TwoWords>
      <div>mosh</div>
      <SecondWord>disco</SecondWord>
    </TwoWords>
  </div>
);

export default PopRockMoshDisco;
