import React, { useEffect, useContext } from 'react'
import { INIT_COUNTDOWN, CountdownContext, SetCountdownContext } from '../../contexts/CountdownContext'
import { ModifyPlayerCollectionContext, SWITCH_ACTIVE_PLAYER } from '../../contexts/PlayerCollectionContext'
import { ACTION_CLICK_BOX, SetRequiredActionContext } from '../../contexts/RequiredActionContext'

const Countdown = () => {
  const countdownSeconds = useContext(CountdownContext)
  const setCountdownSeconds = useContext(SetCountdownContext)
  const setRequiredAction = useContext(SetRequiredActionContext)
  const modifyPlayerCollection = useContext(ModifyPlayerCollectionContext)
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownSeconds > 0) {
        setCountdownSeconds(countdownSeconds - 1)
      } else {
        setCountdownSeconds(INIT_COUNTDOWN)
        setRequiredAction(ACTION_CLICK_BOX)
        modifyPlayerCollection({action: SWITCH_ACTIVE_PLAYER}) // Make const
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