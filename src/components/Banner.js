/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Banner = (props) => (
  <img
    src="turner tristan holm martha biergarten.jpg"
    css={css`
      max-width: 100%;
      display: block;
      padding: 2em 0 1em;
    `}
    {...props}
  />
);

export default Banner;
