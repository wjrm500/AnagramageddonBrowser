import { INIT_COUNTDOWN_SECONDS } from "./initCountdownSeconds"

export const DECREMENT_COUNTDOWN = "DECREMENT_COUNTDOWN"
export const RESET_COUNTDOWN = "RESET_COUNTDOWN"

export const countdownSecondsReducer = (countdownSeconds = INIT_COUNTDOWN_SECONDS, action) => {
  switch (action.type) {
    case DECREMENT_COUNTDOWN:
      return countdownSeconds - action.value
    case RESET_COUNTDOWN:
      return INIT_COUNTDOWN_SECONDS
    default:
      return countdownSeconds
  }
}