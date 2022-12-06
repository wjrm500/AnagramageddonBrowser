import React, { useContext } from 'react'
import { PlayerCollectionContext } from '../../contexts/PlayerCollectionContext'

const ScoreTable = () => {
  const players = useContext(PlayerCollectionContext).getPlayers()
  const rows = players.map((player) => {
    return <tr key={player.name}>
      <td style={{color: player.color}}>{player.name}</td>
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