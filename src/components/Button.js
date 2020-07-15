/** @jsx jsx */
import { jsx } from "@emotion/core";
import { isLight } from "components/Theme";

const DefaultButton = (props) => <button {...props} />;

const Button = ({ primary, element, ...restProps }) => {
  const Element = element || DefaultButton;
  return (
    <Element
      css={(theme) => ({
        padding: "0.5em 1em",
        backgroundColor: primary ? "#ffd400" : isLight(theme) ? "#333" : "#ddd",
        color: primary ? "#333" : isLight(theme) ? "#ddd" : "#333",
        border: "0 none",
        borderRadius: "4px",
        margin: 0,
        fontSize: "1.25em",
      })}
      {...restProps}
    />
  );
};

export default Button;
