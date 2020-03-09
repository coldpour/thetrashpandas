import React, { useState } from "react";
//
import Button from "components/Button";
import SubscribeForm from "components/Forms/SubscribeForm";
import BookUsForm from "components/Forms/BookUsForm";

const BOOK = "BOOK";
const SUBSCRIBE = "SUBSCRIBE";
const StyledButton = ({ style, ...restProps }) => (
  <Button
    style={{
      fontSize: "24px",
      maxWidth: "260px",
      whiteSpace: "nowrap",
      margin: ".25em",
      ...style
    }}
    {...restProps}
  />
);

export default () => {
  const [open, setOpen] = useState(BOOK);
  return (
    <div>
      <div
        style={{
          padding: "2vw 0",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <StyledButton onClick={() => setOpen(open === BOOK ? null : BOOK)}>
          book us
        </StyledButton>
        <StyledButton
          primary
          onClick={() => setOpen(open === SUBSCRIBE ? null : SUBSCRIBE)}
        >
          subscribe
        </StyledButton>
      </div>
      <div
        style={{
          transition: "all 3s ease-out",
          maxHeight: open ? "1000px" : 0,
          overflow: "hidden"
        }}
      >
        <SubscribeForm open={open === SUBSCRIBE} />
        <BookUsForm open={open === BOOK} />
      </div>
    </div>
  );
};
