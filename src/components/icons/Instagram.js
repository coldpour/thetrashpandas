import React from "react";

import Svg from "components/Svg";

const Instagram = props => (
  <Svg viewBox="-5 -5 55 55" stroke="white" strokeWidth="2" {...props}>
    <rect x="1" y="1" width="48" height="48" rx="10" />
    <circle cx="25" cy="25" r="10" />
    <circle cx="40" cy="10" r="3" />
  </Svg>
);

export default Instagram;
