/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
//
import SubscribeForm from "components/SubscribeForm";
import Heading from "components/Heading";

const Announcement = props => (
  <div
    css={css`
      border: 1px solid white;
      color: black;
      background: white;
      padding: 1.5em 1em;
    `}
  >
    <Heading>Catch us next!</Heading>
    <div>6/10 - Bands on the Bricks</div>
    <div>7pm - 1300 block of Pearl St. Boulder, CO</div>
  </div>
);

export default Announcement;
