import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INIT_COUNTDOWN_SECONDS, SET_COUNTDOWN_SECONDS } from '../../reducers/countdownSeconds'
import { SWITCH_ACTIVE_PLAYER } from '../../reducers/playerCollection'
import { ACTION_CLICK_BOX, SET_REQUIRED_ACTION } from '../../reducers/requiredAction'

const Countdown = () => {
  const countdownSeconds = useSelector(state => state.countdownSeconds)
  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownSeconds > 0) {
        dispatch({type: SET_COUNTDOWN_SECONDS, value: countdownSeconds - 1})
      } else {
        dispatch({type: SET_COUNTDOWN_SECONDS, value: INIT_COUNTDOWN_SECONDS})
        dispatch({type: SET_REQUIRED_ACTION, value: ACTION_CLICK_BOX})
        dispatch({type: SWITCH_ACTIVE_PLAYER, value: null})
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