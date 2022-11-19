import React, { useContext } from 'react'
import Countdown from 'react-countdown'
import { ActivePlayerContext } from '../contexts/ActivePlayerContext'

const Timer = () => {
  useContext(ActivePlayerContext)
  const customRenderer = ({seconds}) => seconds
  const countdown = <Countdown date={Date.now() + 30000} renderer={customRenderer} />
  return (
    <span id="timer">
      {countdown}
    </span>
  )
}

export default React.memo(Timer)