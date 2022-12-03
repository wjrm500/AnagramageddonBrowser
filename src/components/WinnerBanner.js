import React from 'react'

const WinnerBanner = ({winningPlayer}) => {
  const onButtonClick = () => window.location.reload()
  return (
    <div id="winnerBanner">
        <div id="winnerText">
          <span id="winningPlayer">{winningPlayer.name}</span> won the game!
        </div>
        <div>
            <button id="startNewGame" onClick={onButtonClick}>
              Start new game
            </button>
        </div>
    </div>
  )
}

export default WinnerBanner