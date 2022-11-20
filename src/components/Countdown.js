import React, { useState, useEffect, useContext } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'

const INITIAL_COUNT = 5

const Countdown = () => {
  useContext(ActivePlayerContext)
  const switchActivePlayer = useContext(SwitchActivePlayerContext)
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
      } else {
        switchActivePlayer()
        setSecondsRemaining(INITIAL_COUNT)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [secondsRemaining])

  return (
    <span id="countdown">
        {secondsRemaining}
    </span>
  )
}

export default Countdown