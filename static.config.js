import path from "path";
import axios from "axios";
//
import songs from "./data/songs.js";

const asc = (a, b) => (a < b ? -1 : a === b ? 0 : 1);
const desc = (a, b) => (a > b ? -1 : a === b ? 0 : 1);

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return [
      {
        path: "/",
        getData: () => ({
          songs: songs
            .map(song => {
              const [title, artist] = song.split("-").map(s => s.trim());
              return { title, artist };
            })
            .sort((one, two) => {
              const [a1, a2] = [one, two].map(song => song.artist);
              return asc(a1, a2);
            })
        })
      },
      {
        path: "/blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
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
