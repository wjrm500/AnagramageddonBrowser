import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT_COUNTDOWN, RESET_COUNTDOWN, SET_COUNTDOWN_SECONDS } from '../../reducers/countdownSeconds'
import { SWITCH_ACTIVE_PLAYER } from '../../reducers/playerCollection'
import { ACTION_CLICK_BOX, SET_REQUIRED_ACTION } from '../../reducers/requiredAction'

const Countdown = () => {
  const countdownSeconds = useSelector(state => state.countdownSeconds)
  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownSeconds > 0) {
        dispatch({type: DECREMENT_COUNTDOWN, value: 1})
      } else {
        dispatch({type: RESET_COUNTDOWN})
        dispatch({type: SET_REQUIRED_ACTION, value: ACTION_CLICK_BOX})
        dispatch({type: SWITCH_ACTIVE_PLAYER})
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