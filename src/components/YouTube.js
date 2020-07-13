/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IFrame from "./IFrame";

const Embed = ({ embed, ...rest }) => (
  <IFrame
    src={`https://www.youtube.com/embed/${embed}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    {...rest}
  />
);

export const Video = ({ v, ...rest }) => <Embed embed={v} {...rest} />;

export const Playlist = ({ list, ...rest }) => (
  <Embed embed={`videoseries?list=${list}`} {...rest} />
);
