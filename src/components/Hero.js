import React from "react";
//
import Video from "components/Video";
import Follow from "components/Follow";

const Hero = () => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    <Follow />
    <Video />
  </div>
);

export default Hero;
