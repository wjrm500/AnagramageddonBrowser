import React, { useContext } from 'react'
import { WinningScoreContext } from '../../contexts/WinningScoreContext'

const ScoreNotification = () => {
  const winningScore = useContext(WinningScoreContext)
  return (
    <div id="scoreNotification">
      You need {winningScore} points to win!
    </div>
    
  )
}

export default ScoreNotification