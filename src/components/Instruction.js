import React from 'react'

const Instruction = () => {
  const activePlayer = "William"
  const prompt = "Click a square next to one of your squares"
  const secondsRemaining = 5
  return (
    <div>
      It's <span id="activePlayer">{activePlayer}</span>'s turn! {prompt}. You've got <span id="timer">{secondsRemaining}</span> seconds...
      </div>
  )
}

export default Instruction