import React from 'react'

const ScoreNotification = ({winningScore}) => {
  return (
    <div id="scoreNotification">
      You need {winningScore} points to win!
    </div>
    
  )
}

export default ScoreNotification