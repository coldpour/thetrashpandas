import React from "react";

const Fieldset = ({ style, legend, children, ...restProps }) => {
  return (
    <div
      role="fieldset"
      style={{
        border: "1px solid #666",
        borderRadius: "5px",
        position: "relative",
        paddingTop: "1em",
        marginTop: "1em",
        ...style
      }}
      {...restProps}
    >
      {legend ? (
        <legend
          style={{
            backgroundColor: "black",
            position: "absolute",
            padding: "0 5px",
            top: 0,
            left: "50%",
            transform: "translate(-50%,-60%)",
            whiteSpace: "nowrap"
          }}
        >
          {legend}
        </legend>
      ) : null}
      {children}
    </div>
  );
};

export default Fieldset;
