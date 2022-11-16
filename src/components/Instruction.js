import React, { useContext } from 'react'
import { ActivePlayerContext } from '../contexts/ActivePlayerContext'

const Instruction = () => {
  const activePlayer = useContext(ActivePlayerContext)
  const prompt = "Click a square next to one of your squares"
  const secondsRemaining = 5
  return (
    <div id="instruction">
      It's <span id="activePlayer" style={{color: activePlayer.color}}>{activePlayer.name}</span>'s turn! {prompt}. You've got <span id="timer">{secondsRemaining}</span> seconds...
    </div>
  )
}

export default Instruction