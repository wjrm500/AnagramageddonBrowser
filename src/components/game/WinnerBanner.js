import React from 'react'
import { useSelector } from 'react-redux'

const WinnerBanner = () => {
  const winningPlayer = useSelector(state => state.winningPlayer)
  const onButtonClick = () => window.location.reload()
  return (
    <div id="winnerBanner" class="fadeIn">
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