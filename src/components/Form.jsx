import React from "react";

const Form = ({ style, ...restProps }) => (
  <form
    style={{ textAlign: "center", width: "100%", ...style }}
    {...restProps}
  />
);

export default Form;
