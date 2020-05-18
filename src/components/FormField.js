import React, { useState } from "react";
//
import Input from "components/Input";

let count = 123;

const StyledInput = ({ style, ...restProps }) => (
  <Input style={{ marginTop: ".25em", ...style }} {...restProps} />
);

const FormField = ({ style, name, id, input, children, ...restProps }) => {
  const [focused, setFocused] = useState(false);
  const [changed, setChanged] = useState(false);
  const myId = id || `${name}-${count++}`;
  const MyInput = input || StyledInput;
  const labelAbove = focused || changed;

  return (
    <label
      style={{
        display: "block",
        maxWidth: "350px",
        ...style
      }}
      htmlFor={myId}
    >
      <div
        style={{
          textAlign: "left",
          zIndex: 1,
          position: "relative",
          transition: "all .15s linear",
          transform: labelAbove ? "" : "translate(42px, 34px) scale(1.25)",
          opacity: labelAbove ? 1 : 0
        }}
      >
        {children}
      </div>
      <MyInput
        id={myId}
        name={name}
        placeholder={labelAbove ? null : children}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => setChanged(e.target.value === "" ? false : true)}
        {...restProps}
      />
    </label>
  );
};

export default FormField;
