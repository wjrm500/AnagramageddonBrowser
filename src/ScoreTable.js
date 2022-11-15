import React from 'react'

const ScoreTable = () => {
  const player1Score = 0
  const player2Score = 0
  return (
    <table id="scoreTable">
      <tr>
          <th>Name</th>
          <th>Score</th>
      </tr>
      <tr>
          <td>Player 1</td>
          <td id="player1Score">
            {player1Score}
          </td>
      </tr>
      <tr>
          <td>Player 2</td>
          <td id="player2Score">
            {player2Score}
          </td>
      </tr>
    </table>
  )
}

export default ScoreTable