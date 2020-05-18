import React from "react";

export default () => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      width: "100%",
      paddingTop: "56.25%"
    }}
  >
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
      }}
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5B4usFO1-64"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
