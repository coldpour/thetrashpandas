import React from "react";
import { useRouteData } from "react-static";
import { Helmet } from "react-helmet";
//
import Nav from "components/Nav";
import Banner from "components/Banner";
import Soundcloud from "components/Soundcloud";
import Songs from "components/Songs";

export default () => {
  const { songs } = useRouteData();

  return (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <title>Trash Pandas | Home</title>
      </Helmet>
      <Nav />
      <Banner />
      <Soundcloud />
      <Songs songs={songs} />
    </div>
  );
};
