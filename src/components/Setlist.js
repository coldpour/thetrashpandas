/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Heading from "components/Heading";

const TD = (props) => (
  <td
    css={css`
      padding: 0.5em;
    `}
    {...props}
  />
);

const Setlist = ({ songs }) => (
  <div>
    <Heading
      css={css`
        padding: 0.75em;
      `}
    >
      Setlist ({songs.length})
    </Heading>
    <table
      css={css`
        margin: auto;
        border-spacing: 0;
      `}
    >
      <tbody>
        {songs.map(({ title, artist }, i) => {
          return (
            <tr
              key={title + artist}
              css={{
                background: i % 2 === 0 ? "#333" : "black",
              }}
            >
              <TD>{title}</TD>
              <TD>{artist}</TD>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default Setlist;
