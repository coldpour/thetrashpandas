import React from "react";
//
import Input from "components/Input";

let count = 123;

const FormField = ({ style, name, id, input, children, ...restProps }) => {
  const myId = id || `${name}-${count++}`;
  const MyInput = input || Input;

  return (
    <label
      style={{
        display: "block",
        maxWidth: "350px",
        ...style
      }}
      htmlFor={myId}
    >
      <div style={{ textAlign: "left" }}>{children}</div>
      <MyInput id={myId} name={name} {...restProps} />
    </label>
  );
};

export default FormField;
