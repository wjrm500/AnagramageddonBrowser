import React, { useEffect, useContext } from 'react'
import { SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import { INIT_COUNTDOWN } from '../components/Container'

const Countdown = ({countdownSeconds, setCountdownSeconds}) => {
  const switchActivePlayer = useContext(SwitchActivePlayerContext)
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownSeconds > 0) {
        setCountdownSeconds(countdownSeconds - 1)
      } else {
        switchActivePlayer()
        setCountdownSeconds(INIT_COUNTDOWN)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [countdownSeconds])
  return (
    <span id="countdown">
        {countdownSeconds}
    </span>
  )
}

export default Countdown