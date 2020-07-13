/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import { Playlist as YouTubePlaylist } from "./YouTube";

const VideoPlaylist = (props) => (
  <YouTubePlaylist list="PLa1peldmDBZiqskC3e3HEWjT2kP2NGw-i" {...props} />
);

export default VideoPlaylist;
