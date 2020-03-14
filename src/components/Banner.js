import React from "react";

const Banner = ({ style, ...restProps }) => (
  <img
    src="turner tristan holm martha biergarten.jpg"
    style={{
      maxWidth: "100%",
      display: "block",
      ...style
    }}
    {...restProps}
  />
);

export default Banner;
