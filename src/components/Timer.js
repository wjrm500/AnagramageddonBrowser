import React, { useContext } from 'react'
import Countdown from 'react-countdown'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'

const Timer = () => {
  const activePlayer = useContext(ActivePlayerContext)
  const switchActivePlayer = useContext(SwitchActivePlayerContext)
  const customRenderer = ({seconds}) => seconds
  console.log(activePlayer)
  const countdown = <Countdown date={Date.now() + 5000} key={activePlayer} renderer={customRenderer} onComplete={switchActivePlayer} /> // Passing activePlayer in to get component to re-render
  return (
    <span id="timer">
      {countdown}
    </span>
  )
}

export default React.memo(Timer)