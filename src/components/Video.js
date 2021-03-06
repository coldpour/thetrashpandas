/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ v, ...rest }) => (
  <div
    css={css`
      position: relative;
      overflow: hidden;
      padding-top: 56.25%;
    `}
    {...rest}
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
      src={`https://www.youtube.com/embed/${v}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
