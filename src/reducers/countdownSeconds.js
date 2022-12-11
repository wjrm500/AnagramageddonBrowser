export const DECREMENT_COUNTDOWN = "DECREMENT_COUNTDOWN"
export const RESET_COUNTDOWN = "RESET_COUNTDOWN"
export const SET_MAX_COUNTDOWN = "SET_MAX_COUNTDOWN"

const INIT_COUNTDOWN_SECONDS = {current: 15, max: 15}

export const countdownSecondsReducer = (countdownSeconds = INIT_COUNTDOWN_SECONDS, action) => {
  switch (action.type) {
    case DECREMENT_COUNTDOWN:
      countdownSeconds.current -= action.decrementBy
      return {...countdownSeconds}
    case RESET_COUNTDOWN:
      countdownSeconds.current = countdownSeconds.max
      return {...countdownSeconds}
    case SET_MAX_COUNTDOWN:
      countdownSeconds.current = countdownSeconds.max = action.maxCountdown
      return {...countdownSeconds}
    default:
      return countdownSeconds
  }
}