import React from "react";
//
import Nav from "components/Nav";
import Banner from "components/Banner";
import SubscribeForm from "components/SubscribeForm";

export default () => (
  <div>
    <Nav />
    <div style={{ position: "relative" }}>
      <Banner style={{ opacity: ".1" }} />
      <SubscribeForm
        style={{
          position: "absolute",
          top: "10vw",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%"
        }}
      />
    </div>
  </div>
);
