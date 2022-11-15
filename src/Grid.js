import React from 'react'
import Box from './Box'

const Grid = () => {
  const dimension = 8
  const rows = Array(dimension).fill().map(() => {
    const row = Array(dimension).fill().map(() =>
      <Box />
    )
    return <div className="row">{row}</div>
  }
  ) 
  return (
    <div id="grid">
      {rows}
    </div>
  )
}

export default Grid