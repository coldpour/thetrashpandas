/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Heading = (props) => (
  <h2
    css={css`
      margin-top: 0;
      font-size: 2em;
    `}
    {...props}
  />
);

export default Heading;
