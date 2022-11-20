import React, {useState, useEffect, useRef, useContext} from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped"
}

const INITIAL_COUNT = 5

const Countdown = () => {
  useContext(ActivePlayerContext)
  const switchActivePlayer = useContext(SwitchActivePlayerContext)
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
  const [status, setStatus] = useState(STATUS.STARTED)

  const secondsToDisplay = secondsRemaining % 60
  // const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
  // const minutesToDisplay = minutesRemaining % 60
  // const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

  // const handleStart = () => setStatus(STATUS.STARTED)
  // const handleStop = () => setStatus(STATUS.STOPPED)
  // const handleReset = () => {
  //   // setStatus(STATUS.STOPPED)
  //   setSecondsRemaining(INITIAL_COUNT)
  // }
  // useEffect(handleStart, [])
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
      } else {
        switchActivePlayer()
        setSecondsRemaining(INITIAL_COUNT)
      }
    },
    status === STATUS.STARTED ? 1000 : null // Passing null stops the interval
  )
  return (
    <span id="countdown">
        {secondsToDisplay}
    </span>
  )
}

export default Countdown

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}