import React from "react";
//
import Social from "components/Social";
import SubscribeForm from "components/SubscribeForm";
import Motto from "components/Motto";

export default () => (
  <div style={{ padding: "3em 1em", flex: 1 }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div style={{ fontSize: "2em" }}>follow:</div>
      <Social />
    </div>
    <SubscribeForm />
  </div>
);
