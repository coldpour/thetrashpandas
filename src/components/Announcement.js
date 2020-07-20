/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import Follow from "components/Follow";
import Heading from "components/Heading";
import { LightThemeProvider } from "components/Theme";

const Announcement = (props) => (
  <div
    css={css`
      border: 1px solid white;
      color: black;
      background: white;
      padding: 1.5em 1em 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
    {...props}
  >
    <Heading>Next Show</Heading>
    <div>September - Boulder Fall Fest</div>
    <div>Details TBD</div>
    <LightThemeProvider>
      <Follow />
    </LightThemeProvider>
  </div>
);

export default Announcement;
