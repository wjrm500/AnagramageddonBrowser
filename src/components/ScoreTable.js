import React, { useContext } from 'react'
import PlayerContext from '../contexts/PlayerContext'

const ScoreTable = () => {
  const players = useContext(PlayerContext)
  const rows = players.map((player) => {
    return <tr key={player.name}>
      <td>{player.name}</td>
      <td>{player.score}</td>
    </tr>
  })
  return (
    <table id="scoreTable">
      <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ScoreTable