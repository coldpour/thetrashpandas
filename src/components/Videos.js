/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import { Video } from "./YouTube";

const TwoColumnVid = (props) => (
  <Video
    css={css`
      flex: 1;
      padding-top: ${(9 / 16 / 2) * 100}%;
    `}
    {...props}
  />
);

const Videos = (props) => (
  <div {...props}>
    <Video v="5B4usFO1-64" />
    <div
      css={css`
        display: flex;
      `}
    >
      <TwoColumnVid v="8O68fPN6wWg" />
      <TwoColumnVid v="WKliAdiaiXU" />
    </div>
  </div>
);

export default Videos;
