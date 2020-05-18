import React from "react";
import { useRouteData } from "react-static";
import { Helmet } from "react-helmet";
//
import Nav from "components/Nav";
import Hero from "components/Hero";
import Banner from "components/Banner";
import Soundcloud from "components/Soundcloud";
import Songs from "components/Songs";
import Footer from "components/Footer";

export default () => {
  const { songs } = useRouteData();

  return (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <title>Trash Pandas | Home</title>
      </Helmet>
      <Nav />
      <Hero />
      <Banner />
      <Soundcloud />
      <Songs songs={songs} />
      <Footer />
    </div>
  );
};
