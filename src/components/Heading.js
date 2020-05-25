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

export default Heading;
