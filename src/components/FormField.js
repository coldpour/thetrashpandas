/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
//
import Input from "components/Input";
import { isLight } from "components/Theme";

let count = 123;

const FormField = ({ name, className, id, input, children, ...restProps }) => {
  const [focused, setFocused] = useState(false);
  const [changed, setChanged] = useState(false);
  const myId = id || `${name}-${count++}`;
  const MyInput = input || Input;
  const labelAbove = focused || changed;

  return (
    <label
      className={className}
      css={css`
        display: flex;
        max-width: 350px;
        position: relative;
        padding-top: 1em;
      `}
      htmlFor={myId}
    >
      <div
        css={(theme) => ({
          textAlign: "left",
          zIndex: 1,
          position: "absolute",
          transition: "all .15s linear",
          transform: labelAbove ? "" : "scale(1.25)",
          top: labelAbove ? -20 : 11,
          left: labelAbove ? 0 : 20,
          color: isLight(theme)
            ? labelAbove
              ? "black"
              : "#777"
            : labelAbove
            ? "white"
            : "#777",
        })}
      >
        {children}
      </div>
      <MyInput
        css={{ flex: 1 }}
        id={myId}
        name={name}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setChanged(e.target.value === "" ? false : true)}
        {...restProps}
      />
    </label>
  );
};

export default FormField;
