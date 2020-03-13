import React from "react";
//
import Nav from "components/Nav";
import Banner from "components/Banner";
import BookUsForm from "components/BookUsForm";

export default () => (
  <div>
    <Nav />
    <div style={{ position: "relative" }}>
      <Banner />
      <div
        style={{
          background: "#000e",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <BookUsForm
          style={{
            position: "absolute",
            top: "10vw",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        />
      </div>
    </div>
  </div>
);
