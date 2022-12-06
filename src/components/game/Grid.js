import React, { useContext } from 'react'
import { ActivePlayerContext } from '../../contexts/ActivePlayerContext'
import { GridSizeContext } from '../../contexts/GridSizeContext'
import PlayerContext from '../../contexts/PlayerContext'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, RequiredActionContext, SetRequiredActionContext } from '../../contexts/RequiredActionContext'
import { SetTextFlashContext } from '../../contexts/TextFlashContext'
import Box from './Box'

const Grid = () => {
  const gridSize = useContext(GridSizeContext)
  console.log(typeof(gridSize))
  const setTextFlash = useContext(SetTextFlashContext)
  const players = useContext(PlayerContext)
  const activePlayer = useContext(ActivePlayerContext)
  const requiredAction = useContext(RequiredActionContext)
  const setRequiredAction = useContext(SetRequiredActionContext)
  const postBoxClickHandler = () => setRequiredAction(ACTION_ENTER_WORD)
  let boxes = []
  const rows = Array(gridSize).fill().map((_, rowIdx) => {
    const row = Array(gridSize).fill().map((_, colIdx) => {
      let player
      const topLeft = rowIdx + colIdx == 0
      const bottomRight = rowIdx * colIdx == Math.pow(gridSize - 1, 2)
      if (topLeft) {
        player = players[0]
      } else if (bottomRight) {
        player = players[1]
      }
      const box = <Box defaultPlayer={player} rowIdx={rowIdx} colIdx={colIdx} activePlayer={activePlayer} active={requiredAction == ACTION_CLICK_BOX} postBoxClickHandler={postBoxClickHandler} setTextFlash={setTextFlash}/>
      boxes.push(box)
      return box
    })
    return <div className="row">{row}</div>
  })
  return (
    <div id="grid">
      {rows}
    </div>
  )
}

export default Grid