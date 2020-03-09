import React, { useState } from "react";
//
const DefaultElement = props => <input {...props} />;

const Input = ({
  style,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  element,
  ...restProps
}) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const Element = element || DefaultElement;

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: hover ? "#444" : focus ? "#333" : "#222",
        padding: ".5em",
        borderRadius: "5px",
        ...style
      }}
    >
      <Element
        style={{
          background: "none",
          border: "none",
          color: "white",
          display: "block",
          fontSize: "20px",
          outline: "none",
          padding: 0,
          width: "100%"
        }}
        onMouseOver={e => {
          setHover(true);
          onMouseOver(e);
        }}
        onMouseOut={e => {
          setHover(false);
          onMouseOut(e);
        }}
        onFocus={e => {
          setFocus(true);
          onFocus(e);
        }}
        onBlur={e => {
          setFocus(false);
          onBlur(e);
        }}
        {...restProps}
      />
      <div
        style={{
          backgroundColor: "#ccc",
          height: "2px",
          position: "absolute",
          left: focus ? "0" : "50%",
          right: focus ? "0" : "50%",
          bottom: 0,
          transition: "all .15s linear"
        }}
      />
    </div>
  );
};

export default Input;
