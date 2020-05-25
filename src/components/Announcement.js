/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Heading = props => (
  <h2
    css={css`
      margin: 0;
    `}
    {...props}
  />
);

const Announcement = props => (
  <div
    css={css`
      border: 1px solid white;
      color: black;
      background: white;
      padding: 1em;
    `}
  >
    <Heading>Catch us next!</Heading>
    <div>6.20 - 9pm Full Cycle, Boulder, CO</div>
  </div>
);

export default Announcement;
