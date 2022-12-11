import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_GRID_SIZE } from '../../reducers/gridSize'
import { ADD_PLAYERS, playerColors } from '../../reducers/playerCollection'
import { SET_WINNING_SCORE } from '../../reducers/winningScore'

const Setup = ({setSetupActive}) => {
  console.log(useSelector(state => state.gridSize))
  const gridSize = useSelector(state => state.gridSize)
  const winningScore = useSelector(state => state.winningScore)
  const [playerNames, ] = useState(["", ""])
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    if (new Set(playerNames).size != playerNames.length) {
      alert("No duplicate player names")
      return false
    }
    dispatch({type: ADD_PLAYERS, value: playerNames})
    setSetupActive(false)
  }
  const [numPlayers, setNumPlayers] = useState(2)
  const playerNameInputs = numPlayers > 0 ? Array(Math.min(numPlayers, 4)).fill().map(
    (_, idx) => {
      let blockColor = playerColors[idx]
      return (
        <div className="formComponent" key={idx}>
          <label><span style={{backgroundColor: blockColor, color: blockColor, marginRight: "5px"}}>000</span>Player {idx + 1} name</label>
          <input type="text" onChange={(e) => playerNames[idx] = e.target.value} required />
        </div>
      )
    }
  ) : ""
  return (
    <div id="formContainer">
      <form id="setupForm" onSubmit={onSubmit}>
        <div className="formComponent">
          <label>Number of players (2 - 4)</label>
          <input type="number" value={!isNaN(numPlayers) ? numPlayers : ""} onChange={(e) => {
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
          <label>Grid size (5 - 15)</label>
          <input type="number"
                 value={!isNaN(gridSize) ? gridSize : ""}
                 onChange={(e) => dispatch({type: SET_GRID_SIZE, value: parseInt(e.target.value)})}
                 min="5"
                 max="15" />
        </div>
        <div className="formComponent">
          <label>Winning score {!isNaN(gridSize) ? "(" + gridSize + " - " + gridSize * 10 + ")" : ""} </label>
          <input type="number"
                 value={!isNaN(winningScore) ? winningScore : ""}
                 onChange={(e) => dispatch({type: SET_WINNING_SCORE, value: parseInt(e.target.value)})}
                 min={!isNaN(gridSize) ? gridSize : ""}
                 max={!isNaN(gridSize) ? gridSize * 10 : ""} />
        </div>
        <div className="formComponent">
          <input id="submitButton" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Setup