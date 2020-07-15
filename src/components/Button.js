/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { isLight } from "components/Theme";

const Button = ({ primary, ...restProps }) => {
  return (
    <button
      css={(theme) => ({
        padding: "0.75em 1.5em",
        backgroundColor: primary ? "#ffd400" : isLight(theme) ? "#333" : "#ddd",
        color: primary ? "#333" : isLight(theme) ? "#ddd" : "#333",
        border: "0 none",
        borderRadius: "4px",
        margin: 0,
      })}
      {...restProps}
    />
  );
};

export default Button;
