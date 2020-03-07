import React from "react";
import { useRouteData } from "react-static";
//
import Banner from "components/Banner";
import ContactForms from "components/ContactForms";
import Soundcloud from "components/Soundcloud";
import Songs from "components/Songs";

export default () => {
  const { songs } = useRouteData();

  return (
    <div style={{ textAlign: "center" }}>
      <Banner />
      <ContactForms />
      <Soundcloud />
      <Songs songs={songs} />
    </div>
  );
};
