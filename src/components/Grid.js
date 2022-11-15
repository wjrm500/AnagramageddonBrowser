import React from 'react'
import Box from './Box'

const Grid = () => {
  const dimension = 8
  let boxes = []
  const rows = Array(dimension).fill().map((_, rowIdx) => {
    const row = Array(dimension).fill().map((_, colIdx) => {
      const box = <Box player={null} rowIdx={rowIdx} colIdx={colIdx} />
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