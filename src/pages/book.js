import React from "react";
//
import Nav from "components/Nav";
import Banner from "components/Banner";
import BookUsForm from "components/BookUsForm";

export default () => (
  <div>
    <Nav />
    <div style={{ position: "relative" }}>
      <Banner style={{ opacity: ".1" }} />
      <BookUsForm
        style={{
          position: "absolute",
          top: "10vw",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          maxWidth: "350px"
        }}
      />
    </div>
  </div>
);
