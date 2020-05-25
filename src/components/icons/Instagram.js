/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import Svg from "components/Svg";

const Instagram = ({ color, ...rest }) => (
  <Svg
    viewBox="-5 -5 55 55"
    css={css`
      stroke: ${color};
      stroke-width: 4;
      fill: none;
    `}
    {...rest}
  >
    <rect x="2" y="2" width="45" height="45" rx="13" />
    <circle cx="25" cy="25" r="10" />
    <circle
      cx="37"
      cy="13"
      r="3"
      css={css`
        fill: ${color};
        stroke: none;
      `}
    />
  </Svg>
);

Instagram.defaultProps = { color: "white" };

export default Instagram;
