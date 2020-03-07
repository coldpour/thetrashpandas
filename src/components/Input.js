import React, { useState } from "react";
//
const Input = ({
  style,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  ...restProps
}) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: hover ? "#444" : focus ? "#333" : "#222",
        padding: ".5em",
        borderRadius: "5px",
        // borderRadius: "5px 5px 0 0",
        ...style
      }}
    >
      <input
        style={{
          padding: 0,
          color: "white",
          display: "block",
          borderRadius: "4px",
          background: "none",
          border: "none",
          fontSize: "20px",
          width: "100%",
          outline: "none"
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
