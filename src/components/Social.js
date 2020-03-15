import React from "react";

import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";
import Soundcloud from "components/icons/Soundcloud";
import YouTube from "components/icons/YouTube";

const links = [
  [
    "YouTube",
    "https://www.youtube.com/channel/UCrLxYjaybThO40cTt0Dyw2w",
    YouTube
  ],
  ["Instagram", "https://www.instagram.com/TheTrashPandasMusic/", Instagram],
  ["Soundcloud", "https://soundcloud.com/user-281835539", Soundcloud],
  ["Facebook", "https://www.facebook.com/TrashPandasMusic", Facebook]
  // ["Email", "thetrashpandasmusic@gmail.com"],
  // ["MyAfton", "https://myafton.com/TheTrashPandas"]
];

const Social = ({ style, ...restProps }) => (
  <div
    style={{
      display: "flex",
      maxwidth: "350px",
      justifyContent: "center",
      alignItems: "center",
      ...style
    }}
    {...restProps}
  >
    {links.map(([name, url, Icon]) => (
      <a key={name} href={url} style={{ margin: ".75em" }}>
        {Icon ? <Icon style={{ width: "40px" }} /> : name}
      </a>
    ))}
  </div>
);

export default Social;
