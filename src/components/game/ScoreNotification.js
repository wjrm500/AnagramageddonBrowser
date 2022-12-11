import React from 'react'
import { useSelector } from 'react-redux'

const ScoreNotification = () => {
  const winningScore = useSelector(state => state.winningScore)
  return (
    <div id="scoreNotification">
      You need {winningScore} points to win!
    </div>
    
  )
}

export default ScoreNotification