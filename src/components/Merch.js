/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Heading from "components/Heading";

import MerchLink2 from "components/MerchLink2";

const MerchItemLink = (props) => (
  <a
    css={css`
      display: inline-block;
      text-decoration: none;
      flex: 0 0 auto;
    `}
    {...props}
  />
);

const MerchItemImg = (props) => (
  <img
    css={css`
      height: 200px;
      width: 200px;
    `}
    {...props}
  />
);

const MerchItem = ({ href, src, alt, ...rest }) => (
  <MerchItemLink href={href} {...rest}>
    <MerchItemImg src={src} alt={alt} />
  </MerchItemLink>
);

const setScrollLeft = (node) => {
  node.scrollLeft = 200;
};

const Merch = (props) => {
  return (
    <div
      css={css`
        padding: 2em 0 3em;
        background: white;
        color: black;
      `}
      {...props}
    >
      <Heading>Merch</Heading>
      <div
        css={css`
          height: 200px;
          width: 100%;
          overflow-x: auto;
          display: flex;
          flex-wrap: nowrap;
          -webkit-overflow-scrolling: touch;
          :before,
          :after {
            content: "";
            width: 90px;
            flex: 0 0 auto;
          }
        `}
        ref={setScrollLeft}
      >
        <MerchItem
          href="https://shop.spreadshirt.com/trash-pandas/og+black+panda-A5dd07922f937641d6cc45def?productType=1408&sellable=OwR0m5ZeoAIzyXq5bLwz-1408-8&appearance=1"
          src="./crop.webp"
          alt="crop white t - dancing trash panda"
        />
        <MerchItem
          href="https://shop.spreadshirt.com/trash-pandas/pop+rock+mosh+disco-A5eabbac21cbf3a422aee574e?productType=803&sellable=2LOLJr28qQt4AyaLvvl8-803-34&appearance=231"
          src="./hat.webp"
          alt="med grey snapback hat - pop rock mosh disco"
        />
        <MerchItem
          href="https://shop.spreadshirt.com/trash-pandas/og+white+panda-A5dd0835b2051767015e6c87f?productType=1130&sellable=ML2nvmrOaJIxM3m3zGBj-1130-7&appearance=228"
          src="./tshirt.webp"
          alt="dark grey t - og black trash panda"
        />
      </div>

      <MerchLink2
        css={css`
          margin-top: 2em;
        `}
      >
        shop
      </MerchLink2>
    </div>
  );
};

export default Merch;
