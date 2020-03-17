import path from "path";
import axios from "axios";
//
import { songsInDoneColumn } from "./requests";

const asc = (a, b) => (a < b ? -1 : a === b ? 0 : 1);
const desc = (a, b) => (a > b ? -1 : a === b ? 0 : 1);

export default {
  getRoutes: async () => {
    const { data: cards } = await axios.get(songsInDoneColumn);

    return [
      {
        path: "/",
        getData: () => ({
          songs: cards
            .map(({ name }) => {
              const [title, artist] = name.split("-").map(s => s.trim());
              return { title, artist };
            })
            .sort((one, two) => {
              const [a1, a2] = [one, two].map(song => song.artist);
              return asc(a1, a2);
            })
        })
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
