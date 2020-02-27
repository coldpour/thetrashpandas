import React from 'react'

import songs from './song-data.js'

export default () => (
  <div>
    <h1>Songs</h1>
    <table>
      <tbody>
        {songs.map(song => {
          const [title, artist] = song.split('-')
          return (
            <tr key={song}>
              <td>{title}</td>
              <td>{artist}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)
