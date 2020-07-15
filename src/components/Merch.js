/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Heading from "components/Heading";

import MerchLink2 from "components/MerchLink2";

const Merch = (props) => (
  <div
    css={css`
      padding: 2em 0 3em;
      background: white;
      color: black;
    `}
    {...props}
  >
    <Heading>Merch</Heading>
    <a
      href="https://shop.spreadshirt.com/trash-pandas/og+black+panda-A5dd07922f937641d6cc45def?productType=1408&sellable=OwR0m5ZeoAIzyXq5bLwz-1408-8&appearance=1"
      css={css`
        display: block;
        margin: 2em auto 0;
        text-decoration: none;
        position: relative;
      `}
    >
      <img
        css={css`
          height: 200px;
          width: 200px;
        `}
        src="./crop.jpg"
        alt="crop white t - og black panda"
      />
    </a>
    <MerchLink2
      css={css`
        margin-top: 2em;
      `}
    >
      shop
    </MerchLink2>
  </div>
);

export default Merch;
