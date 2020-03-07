import React, { useState } from "react";
//
import Button from "components/Button";
import Subscribe from "components/Forms/Subscribe";

const BOOK = "BOOK";
const SUBSCRIBE = "SUBSCRIBE";
const StyledButton = ({ style, ...restProps }) => (
  <Button
    style={{ margin: "1em .5em", fontSize: "32px", ...style }}
    {...restProps}
  />
);

export default () => {
  const [open, setOpen] = useState(SUBSCRIBE);
  return (
    <div>
      <StyledButton onClick={() => setOpen(open === BOOK ? null : BOOK)}>
        book us
      </StyledButton>
      <StyledButton
        primary
        onClick={() => setOpen(open === SUBSCRIBE ? null : SUBSCRIBE)}
      >
        subscribe
      </StyledButton>
      <div
        style={{
          transition: "all .1s ease-out",
          maxHeight: open ? "1000px" : 0
        }}
      >
        {SUBSCRIBE && <Subscribe />}
      </div>
    </div>
  );
};
