/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const IFrame = ({ className, ...rest }) => (
  <div
    css={css`
      position: relative;
      overflow: hidden;
      padding-top: 56.25%;
    `}
    className={className}
  >
    <iframe
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      `}
      {...rest}
    ></iframe>
  </div>
);

export default IFrame;
