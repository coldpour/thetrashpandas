import React from "react";

import Svg from "components/Svg";

const Email = props => (
  <Svg viewBox="0 0 60 60" stroke="white" strokeWidth="4" {...props}>
    <rect x="2" y="10" width="56" height="45" rx="3" />
    <polygon points="4,10 30,34 56,10" strokeLinejoin="round" />
  </Svg>
);

export default Email;
