import React from "react";

export default ({ songs }) => (
  <div>
    <h1>Songs ({songs.length})</h1>
    <table
      style={{
        margin: "auto"
      }}
    >
      <tbody>
        {songs.map(({ title, artist }) => {
          return (
            <tr key={title + artist}>
              <td style={{ textAlign: "right" }}>{title}</td>
              <td style={{ padding: "0 .5em" }}>-</td>
              <td style={{ textAlign: "left" }}>{artist}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
