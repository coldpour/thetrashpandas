import React from "react";

const Copy = ({ style, ...restProps }) => (
  <div style={{ padding: "1em", ...style }} {...restProps}>
    The Trash Pandas
    {" \u00a9 "}
    {new Date().getFullYear()}
  </div>
);

export default Copy;
