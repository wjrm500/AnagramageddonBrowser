import React from 'react'

const Instruction = () => {
  const activePlayer = "William"
  const prompt = "Click a square next to one of your squares"
  const secondsRemaining = 5
  return (
    <div>
      It's {activePlayer}'s turn! {prompt}. You've got {secondsRemaining} seconds...
      </div>
  )
}

export default Instruction