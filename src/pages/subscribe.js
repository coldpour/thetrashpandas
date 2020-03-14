import React from "react";
import { Helmet } from "react-helmet";
//
import Nav from "components/Nav";
import Banner from "components/Banner";
import SubscribeForm from "components/SubscribeForm";

export default () => (
  <div>
    <Helmet>
      <title>Trash Pandas | Subscribe</title>
    </Helmet>
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
