/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
//
import Social from "components/Social";
import SubscribeForm from "components/SubscribeForm";
import Motto from "components/Motto";

export default () => (
  <div style={{ padding: "3em 1em", flex: 1 }}>
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Social />
    </div>
    <SubscribeForm />
  </div>
);
