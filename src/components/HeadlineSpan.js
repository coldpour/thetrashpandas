import React from "react";

const HeadlineSpan = ({ style, ...restProps }) => {
  return <span style={{ margin: "0 .125em", ...style }} {...restProps} />;
};

export default HeadlineSpan;
