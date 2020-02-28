import React from "react";

export default ({ songs }) => (
  <div>
    <h1>Songs ({songs.length})</h1>
    <table>
      <tbody>
        {songs.map(({ title, artist }) => {
          return (
            <tr key={title + artist}>
              <td>{title}</td>
              <td>{artist}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
