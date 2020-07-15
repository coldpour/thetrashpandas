/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
//
import SubscribeForm from "components/SubscribeForm";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";

const SocialLink = (rest) => (
  <a
    css={css`
      border-radius: 10em;
      display: inline-block;
      width: 30px;
      height: 30px;
      background: #ddd;
      position: relative;
    `}
    {...rest}
  />
);

export default (props) => (
  <div {...props}>
    <SubscribeForm
      css={css`
        margin-top: 0.5em;
      `}
    />
    <div
      css={css`
        margin-top: 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        > * {
          margin: 0.5em;
        }
      `}
    >
      <SocialLink href="https://www.instagram.com/TheTrashPandasMusic/">
        <Instagram
          color="#333"
          css={css`
            width: 24px;
            position: absolute;
            top: 2px;
            left: 2px;
          `}
        />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/TrashPandasMusic">
        <Facebook
          css={css`
            width: 20px;
            fill: #333;
            position: absolute;
            top: 5px;
            left: 5px;
          `}
        />
      </SocialLink>
    </div>
  </div>
);
