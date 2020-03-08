import React from "react";

const Button = ({ primary, style, ...restProps }) => {
  return (
    <button
      style={{
        padding: ".75em 1.5em",
        backgroundColor: primary ? "#ffd400" : "#ddd",
        color: "#333",
        border: "0 none",
        borderRadius: "4px",
        ...style
      }}
      {...restProps}
    />
  );
};

export default Button;
