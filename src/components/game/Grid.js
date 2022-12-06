import React, { useContext } from 'react'
import { GridSizeContext } from '../../contexts/GridSizeContext'
import { PlayerCollectionContext } from '../../contexts/PlayerCollectionContext'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, RequiredActionContext, SetRequiredActionContext } from '../../contexts/RequiredActionContext'
import { SetTextFlashContext } from '../../contexts/TextFlashContext'
import Box from './Box'

const Grid = () => {
  const gridSize = useContext(GridSizeContext)
  const setTextFlash = useContext(SetTextFlashContext)
  const playerCollection = useContext(PlayerCollectionContext)
  const activePlayer = playerCollection.getActivePlayer()
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
        player = playerCollection.getPlayerByIdx(0)
      } else if (bottomRight) {
        player = playerCollection.getPlayerByIdx(1)
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