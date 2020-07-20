/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useRouteData } from "react-static";
import { Helmet } from "react-helmet";
//
import Nav from "components/Nav";
import Videos from "components/Videos";
import Banner from "components/Banner";
import Soundcloud from "components/Soundcloud";
import Setlist from "components/Setlist";
import Footer from "components/Footer";
import Motto from "components/Motto";
import Announcement from "components/Announcement";
import Merch from "components/Merch";

export default () => {
  const { songs } = useRouteData();

  return (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <title>Trash Pandas | Home</title>
      </Helmet>
      <Nav />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          @media (min-width: 800px) {
            flex-direction: row;
          }
        `}
      >
        <Announcement
          css={css`
            flex: 0 0 50%;
            @media (min-width: 800px) {
              order: 2;
            }
          `}
        />
        <Videos
          css={css`
            flex: 0 0 50%;
            @media (min-width: 800px) {
              order: 1;
            }
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          @media (min-width: 800px) {
            flex-direction: row;
          }
        `}
      >
        <Soundcloud
          css={css`
            flex-basis: 50%;
          `}
        />
        <Motto
          css={css`
            flex-basis: 50%;
          `}
        />
      </div>
      <Merch />
      <Banner />
      <Setlist songs={songs} />
      <Footer />
    </div>
  );
};
