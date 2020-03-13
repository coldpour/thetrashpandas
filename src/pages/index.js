import React from "react";
import { useRouteData } from "react-static";
//
import Nav from "components/Nav";
import Banner from "components/Banner";
import Soundcloud from "components/Soundcloud";
import Songs from "components/Songs";

export default () => {
  const { songs } = useRouteData();

  return (
    <div style={{ textAlign: "center" }}>
      <Nav />
      <Banner />
      <Soundcloud />
      <Songs songs={songs} />
    </div>
  );
};
