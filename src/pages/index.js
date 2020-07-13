/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useRouteData } from "react-static";
import { Helmet } from "react-helmet";
//
import Nav from "components/Nav";
import Videos from "components/Videos";
import Banner from "components/Banner";
import Soundcloud from "components/Soundcloud";
import Songs from "components/Songs";
import Footer from "components/Footer";
import Motto from "components/Motto";
import Announcement from "components/Announcement";

export default () => {
  const { songs } = useRouteData();

  return (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <title>Trash Pandas | Home</title>
      </Helmet>
      <Nav
        css={css`
          margin-bottom: 1em;
        `}
      />
      <Announcement />
      <Videos />
      <Motto />
      <Soundcloud />
      <Banner />
      <Songs songs={songs} />
      <Footer />
    </div>
  );
};
