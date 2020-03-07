import React, { useState } from "react";
//
const Radio = ({ style, ...restProps }) => {
  return <input type="radio" style={{ ...style }} {...restProps} />;
};

export default Radio;
