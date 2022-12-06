import React, { useContext, useState } from 'react'
import { GridSizeContext, SetGridSizeContext } from '../../contexts/GridSizeContext'
import { ModifyPlayerCollectionContext, playerColors } from '../../contexts/PlayerCollectionContext'
import { SetSetupActiveContext } from '../../contexts/SetupActiveContext'
import { SetWinningScoreContext, WinningScoreContext } from '../../contexts/WinningScoreContext'

const Setup = () => {
  const gridSize = useContext(GridSizeContext)
  const setGridSize = useContext(SetGridSizeContext)
  const winningScore = useContext(WinningScoreContext)
  const setWinningScore = useContext(SetWinningScoreContext)
  const setSetupActive = useContext(SetSetupActiveContext)
  const playerNames = useState(["", ""])
  const modifyPlayerCollection = useContext(ModifyPlayerCollectionContext)
  const onSubmit = () => {
    modifyPlayerCollection({action: "addPlayers", playerNames: playerNames})
    setSetupActive(false)
  }
  const [numPlayers, setNumPlayers] = useState(2)
  const playerNameInputs = numPlayers > 0 ? Array(numPlayers).fill().map(
    (_, idx) => {
      let blockColor = playerColors[idx]
      return (
        <div className="formComponent">
          <label><span style={{backgroundColor: blockColor, color: blockColor, marginRight: "5px"}}>000</span>Player {idx + 1} name</label>
          <input type="text" onChange={(e) => playerNames[idx] = e.target.value} />
        </div>
      )
    }
  ) : ""
  return (
    <div id="formContainer">
      <form id="setupForm" onSubmit={onSubmit}>
        <div className="formComponent">
          <label>Number of players (2 - 4)</label>
          <input type="number" value={numPlayers} onChange={(e) => {
            const newNumPlayers = e.target.value != "" ? parseInt(e.target.value) : ""
            if (newNumPlayers > numPlayers) {
              for (let i = 0; i < newNumPlayers - numPlayers; i++) {
                playerNames.push("")
              }
            } else if (newNumPlayers < numPlayers) {
              for (let i = 0; i < numPlayers - newNumPlayers; i++) {
                playerNames.pop()
              }
            }
            setNumPlayers(newNumPlayers)
          }} min="2" max="4" />
        </div>
        {playerNameInputs}
        <div className="formComponent">
          <label>Grid size (5 - 20)</label>
          <input type="number" value={gridSize} onChange={(e) => setGridSize(parseInt(e.target.value))} min="5" max="20" />
        </div>
        <div className="formComponent">
          <label>Winning score ({gridSize} - {gridSize * 10})</label>
          <input type="number" value={winningScore} onChange={(e) => setWinningScore(parseInt(e.target.value))} min={gridSize} max={gridSize * 10} />
        </div>
        <div className="formComponent">
          <input id="submitButton" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Setup