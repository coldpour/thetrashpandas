/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
//
import Input from "components/Input";

let count = 123;

const StyledInput = props => <Input css={{ marginTop: ".25em" }} {...props} />;

const FormField = ({ name, className, id, input, children, ...restProps }) => {
  const [focused, setFocused] = useState(false);
  const [changed, setChanged] = useState(false);
  const myId = id || `${name}-${count++}`;
  const MyInput = input || StyledInput;
  const labelAbove = focused || changed;

  return (
    <label
      className={className}
      css={{
        display: "block",
        maxWidth: "350px"
      }}
      htmlFor={myId}
    >
      <div
        css={{
          textAlign: "left",
          zIndex: 1,
          position: "relative",
          transition: "all .15s linear",
          transform: labelAbove ? "" : "translate(42px, 34px) scale(1.25)",
          color: labelAbove ? "white" : "#777"
        }}
      >
        {children}
      </div>
      <MyInput
        id={myId}
        name={name}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => setChanged(e.target.value === "" ? false : true)}
        {...restProps}
      />
    </label>
  );
};

export default FormField;
