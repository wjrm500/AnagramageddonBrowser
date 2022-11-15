import React from 'react'

const WinnerBanner = () => {
  const winningPlayer = null
  const onButtonClick = () => window.location.reload()
  return (
    <div id="winnerBanner">
        <div id="winnerText">
          <span id="winningPlayer">{winningPlayer}</span> won the game!
        </div>
        <div>
            <button id="startNewGame" onclick={onButtonClick}>
              Start new game
            </button>
        </div>
    </div>
  )
}

export default WinnerBanner