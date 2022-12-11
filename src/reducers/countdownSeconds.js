export const SET_COUNTDOWN_SECONDS = 'SET_COUNTDOWN_SECONDS'
export const INIT_COUNTDOWN_SECONDS = 15

export const countdownSecondsReducer = (countdownSeconds = INIT_COUNTDOWN_SECONDS, action) => {
  switch (action.type) {
    case SET_COUNTDOWN_SECONDS:
      return action.value
    default:
      return countdownSeconds
  }
}