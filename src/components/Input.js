/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
//
import { isLight } from "components/Theme";

const DefaultElement = (props) => <input {...props} />;

const Underline = ({ show, ...rest }) => (
  <div
    css={(theme) => ({
      backgroundColor: isLight(theme) ? "#333" : "#ccc",
      height: "2px",
      position: "absolute",
      bottom: 0,
      transition: "all 0.15s linear",
      left: show ? 0 : "50%",
      right: show ? 0 : "50%",
    })}
    {...rest}
  />
);

const Input = ({
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  element,
  className,
  ...restProps
}) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const Element = element || DefaultElement;

  return (
    <div
      className={className}
      css={(theme) => ({
        position: "relative",
        backgroundColor: isLight(theme)
          ? hover
            ? "#bbb"
            : focus
            ? "#ccc"
            : "#ddd"
          : hover
          ? "#444"
          : focus
          ? "#333"
          : "#222",
        padding: "9px",
        borderRadius: "5px",
      })}
    >
      <Element
        css={(theme) => ({
          background: "none",
          border: "none",
          color: isLight(theme) ? "black" : "white",
          display: "block",
          fontSize: "20px",
          fontFamily: "inherit",
          outline: "none",
          padding: 0,
          width: "100%",
          margin: 0,
        })}
        onMouseOver={(e) => {
          setHover(true);
          if (onMouseOver) onMouseOver(e);
        }}
        onMouseOut={(e) => {
          setHover(false);
          if (onMouseOut) onMouseOut(e);
        }}
        onFocus={(e) => {
          setFocus(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          if (onBlur) onBlur(e);
        }}
        {...restProps}
      />
      <Underline show={focus} />
    </div>
  );
};

export default Input;
