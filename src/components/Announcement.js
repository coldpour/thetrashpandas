/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import Follow from "components/Follow";
import Heading from "components/Heading";

const Announcement = (props) => (
  <div
    css={css`
      border: 1px solid white;
      color: black;
      background: white;
      padding: 1.5em 1em 1em;
    `}
  >
    <Heading>Next Show</Heading>
    <div>September - Boulder Fall Fest</div>
    <div>Details TBD</div>
    <Follow />
  </div>
);

export default Announcement;
