/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
//
const DefaultElement = props => <input {...props} />;

const Underline = ({ show, ...rest }) => (
  <div
    css={{
      backgroundColor: "#ccc",
      height: "2px",
      position: "absolute",
      bottom: 0,
      transition: "all 0.15s linear",
      left: show ? 0 : "50%",
      right: show ? 0 : "50%"
    }}
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
      css={{
        position: "relative",
        backgroundColor: hover ? "#444" : focus ? "#333" : "#222",
        padding: "9px",
        borderRadius: "5px"
      }}
    >
      <Element
        css={{
          background: "none",
          border: "none",
          color: "white",
          display: "block",
          fontSize: "20px",
          fontFamily: "inherit",
          outline: "none",
          padding: 0,
          width: "100%"
        }}
        onMouseOver={e => {
          setHover(true);
          if (onMouseOver) onMouseOver(e);
        }}
        onMouseOut={e => {
          setHover(false);
          if (onMouseOut) onMouseOut(e);
        }}
        onFocus={e => {
          setFocus(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={e => {
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
