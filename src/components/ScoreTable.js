import React from 'react'

const ScoreTable = ({player1Score, player2Score}) => {
  return (
    <table id="scoreTable">
      <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  )
}

export default ScoreTable