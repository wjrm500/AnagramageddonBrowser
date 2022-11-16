import React, { useContext } from 'react'
import { ActivePlayerContext } from '../contexts/ActivePlayerContext'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, RequiredActionContext } from '../contexts/RequiredActionContext'

const Instruction = () => {
  const activePlayer = useContext(ActivePlayerContext)
  const requiredAction = useContext(RequiredActionContext)
  const promptMap = new Map([
    [ACTION_CLICK_BOX, "Click a square next to one of your squares"],
    [ACTION_ENTER_WORD, "Enter a word that can be formed by your letters"]
  ])
  const prompt = promptMap.get(requiredAction)
  const secondsRemaining = 5
  return (
    <div id="instruction">
      It's <span id="activePlayer" style={{color: activePlayer.color}}>{activePlayer.name}</span>'s turn! {prompt}. You've got <span id="timer">{secondsRemaining}</span> seconds...
    </div>
  )
}

export default Instruction