import React, { useState } from "react";
import { Link } from "@reach/router";
//
import Button from "components/Button";
import SubscribeForm from "components/SubscribeForm";
import BookUsForm from "components/BookUsForm";

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
  return (
    <div
      style={{
        padding: "2vw 0",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Link to="/subscribe">Subscribe</Link>
      <Link to="/book">Book</Link>
    </div>
  );
};
