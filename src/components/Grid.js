import React, { useContext } from 'react'
import PlayerContext from '../contexts/PlayerContext'
import Box from './Box'

const Grid = () => {
  const dimension = 8
  const players = useContext(PlayerContext)
  let boxes = []
  const rows = Array(dimension).fill().map((_, rowIdx) => {
    const row = Array(dimension).fill().map((_, colIdx) => {
      let player
      if (rowIdx + colIdx == 0) { // Top left
        player = players[0]
      } else if (rowIdx * colIdx == Math.pow(dimension - 1, 2)) { // Bottom right
        player = players[1]
      }
      const box = <Box defaultPlayer={player} rowIdx={rowIdx} colIdx={colIdx} />
      boxes.push(box)
      return box
    })
    return <div className="row">{row}</div>
  })
  // const getRandomBox = () => boxes[Math.floor(Math.random() * boxes.length)]
  return (
    <div id="grid">
      {rows}
    </div>
  )
}

export default Grid