/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Button = ({ primary, ...restProps }) => {
  return (
    <button
      css={{
        padding: ".75em 1.5em",
        backgroundColor: primary ? "#ffd400" : "#ddd",
        color: "#333",
        border: "0 none",
        borderRadius: "4px"
      }}
      {...restProps}
    />
  );
};

export default Button;
