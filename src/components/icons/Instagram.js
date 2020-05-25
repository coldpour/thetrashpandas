import React from "react";

import Svg from "components/Svg";

const Instagram = props => (
  <Svg viewBox="-5 -5 55 55" stroke="white" strokeWidth="4" {...props}>
    <rect x="2" y="2" width="45" height="45" rx="13" />
    <circle cx="25" cy="25" r="10" />
    <circle cx="37" cy="13" r="3" stroke="none" fill="white" />
  </Svg>
);

export default Instagram;
